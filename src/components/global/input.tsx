import { ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'> {
}

export function Input({ ...props }: InputProps) {
    return (
        <input {...props} className="px-3 w-full rounded-lg h-10 bg-zinc-800 shadow-shape">

        </input>
    )
}