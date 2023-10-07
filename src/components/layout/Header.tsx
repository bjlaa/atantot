import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Header({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <header className={twMerge('px-4 py-8', className)}>{children}</header>
}
