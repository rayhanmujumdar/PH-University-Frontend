import { Button } from "antd";
import { JwtPayload } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

export default function Login() {
    const location = useLocation()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: '123123'
        }
    })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const onSubmit = async (data: Record<string, unknown>) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        const token = res.data.accessToken
        if (token) {
            const decoded: JwtPayload & { role?: string } = verifyToken(token)
            dispatch(setUser({ user: decoded, token }))
            const redirect = location.state ? location.state.pathname : `/${decoded.role}`
            navigate(redirect, { replace: true, state: null })
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex h-screen justify-center items-center flex-col space-y-5">
            <div>
                <label htmlFor="id">ID: </label>
                <input {...register('userId')} className="border px-2 py-3" type="text" id="id" placeholder="ID" />
            </div>
            <div>
                <label htmlFor="id">Password: </label>
                <input {...register('password')} className="border px-2 py-3" type="text" id="id" placeholder="password" />
            </div>
            <Button htmlType="submit">
                Submit
            </Button>
        </form>
    );
} 