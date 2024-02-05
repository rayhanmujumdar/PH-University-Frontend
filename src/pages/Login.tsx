import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

export default function Login() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: '123123'
        }
    })
    const [login, { data, error }] = useLoginMutation()
    console.log('Data => ', data);
    console.log("Error => ", error);
    const onSubmit = (data) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        login(userInfo)
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