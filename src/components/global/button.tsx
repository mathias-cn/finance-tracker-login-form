import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({

    variants: {
        variant: {
            default: 'w-full font-semibold bg-violet-600 rounded-lg h-10',
            textLink: 'text-center underline'
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        },
    },

    defaultVariants: {
        variant: 'default'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant })}>
            {children}
        </button>
    )
}