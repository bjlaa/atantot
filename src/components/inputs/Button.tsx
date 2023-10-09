import { HtmlHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonSize } from '../../types/values'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  size?: ButtonSize
  color?: 'primary' | 'secondary' | 'text'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  id?: string
  title?: string
} & PropsWithChildren

export const colorClassNames = {
  primary:
    'transition-colors text-white bg-teal-600 shadow-sm hover:text-white hover:bg-teal-700 active:bg-teal-700',
  secondary:
    'border-solid border-teal-600 border-2 text-teal-600 shadow-sm bg-transparent hover:bg-teal-500 hover:border-teal-700',
  text: 'text-teal-600 bg-transparent shadow-none hover:bg-teal-500 hover:text-teal-600 hover:border-teal-600',
}

export const sizeClassNames = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-4 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-6 text-2xl',
}

export const baseClassNames =
  'inline-flex items-center whitespace-nowrap rounded-md font-bold no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 aria-disabled:opacity-50 transition-color '

export default function Button({
  onClick,
  children,
  className,
  size = 'md',
  color = 'primary',
  type,
  disabled,
  id,
  title,
  ...props
}: PropsWithChildren<Props & HtmlHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      onClick={disabled ? () => {} : onClick}
      type={type}
      aria-disabled={disabled}
      title={title}
      id={id}
      className={twMerge(
        `${baseClassNames} ${sizeClassNames[size]} ${colorClassNames[color]}`,
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
