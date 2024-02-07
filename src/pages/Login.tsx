import { Button, Row, Typography } from "antd";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
const { Title } = Typography

export default function Login() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();
    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Login in");
        try {
            const userInfo = {
                id: data.userId,
                password: data.password,
            };
            const res = await login(userInfo).unwrap();
            const token = res.data.accessToken;
            if (token) {
                toast.success("successfully login", {
                    id: toastId,
                    duration: 2000,
                    className: "!text-green-500",
                });
                const decoded = verifyToken(token) as TUser;
                dispatch(setUser({ user: decoded, token }));
                const redirect = location.state
                    ? location.state.pathname
                    : `/${decoded.role}`;
                navigate(redirect, { replace: true, state: null });
            }
        } catch (err) {
            toast.error("something went wrong", {
                id: toastId,
                duration: 2000,
                className: "!text-red-500",
            });
        }
    };
    return (
        <Row justify="center" align="middle" className=" h-screen">
            <PHForm
                onSubmit={onSubmit}
                className="flex justify-center items-center flex-col space-y-5 w-96 border p-5 shadow-md rounded-md"
            >
                <Title level={2} style={{ textTransform: 'uppercase' }}>Login</Title>
                <PHInput name="userId" label="ID" type="text" />
                <PHInput name="password" label="Password" type="text" />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
        </Row>
    );
}
