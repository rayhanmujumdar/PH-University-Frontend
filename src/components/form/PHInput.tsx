import { Input } from "antd";
import { HTMLAttributes } from "react";
import { Controller } from "react-hook-form";

type TPHInput = HTMLAttributes<HTMLInputElement> & {
    name: string;
    type: string;
    label?: string;
}

export default function PHInput({ name, type, label, ...props }: TPHInput) {
    return (
        <div className="m-0 flex flex-col space-y-1">
            {label ? <label htmlFor="id">{label} : </label> : null}
            <Controller
                name={name}
                render={({ field }) => {
                    return <Input
                        {...props}
                        style={{ width: '350px' }}
                        {...field}
                        type={type}
                        id={name}
                        placeholder={label}
                    />
                }}
            />
        </div>
    )
}
