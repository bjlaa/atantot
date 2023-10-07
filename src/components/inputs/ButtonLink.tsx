import { HtmlHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { ButtonSize } from '../../types/values'
import { baseClassNames, colorClassNames, sizeClassNames } from './Button'

type Props = {
  to: string
  className?: string
  color?: 'primary' | 'secondary' | 'text'
  size?: ButtonSize
  title?: string
  onClick?: () => void
}

export default function ButtonLink({
  to,
  children,
  className = '',
  color = 'primary',
  size = 'md',
  title,
  onClick,
  ...props
}: PropsWithChildren<Props & HtmlHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <Link
      to={to}
      onClick={onClick}
      title={title}
      className={twMerge(
        `${baseClassNames} ${sizeClassNames[size]} ${colorClassNames[color]}`,
        className
      )}
      {...props}>
      {children}
    </Link>
  )
}
