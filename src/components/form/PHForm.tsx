import { HTMLAttributes, ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

// type Inputs = {
//     userId: string;
//     password: string
// }

type TPHForm = HTMLAttributes<HTMLFormElement> & {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
}

export default function PHForm({ onSubmit, children, ...props }: TPHForm) {
    const methods = useForm<FieldValues>()
    return (
        <FormProvider {...methods}>
            <form {...props} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
