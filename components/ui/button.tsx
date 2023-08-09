import { cn } from '@/app/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(`w-auto rounded-full bg-emerald-800 border-transparent px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`, className)}
            ref={ref}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button