import { ChangeEvent, ReactNode } from 'react'

type Props = {
  name: string
  label: string | ReactNode
  isInvalid?: boolean
  error?: string
  helperText?: string
  className?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  value?: string
  required?: boolean
  children?: ReactNode[]
}

export default function SelectInputGroup({
  name,
  label,
  error,
  helperText,
  className,
  placeholder,
  onChange,
  value,
  required = false,
  children,
  ...props
}: Props) {
  return (
    <div className={`flex flex-col ${className}`} aria-live="polite">
      <label htmlFor={name}>
        <span
          className={`text-sm font-bold text-slate-900 ${
            error ? '!text-red-700' : ''
          }`}>
          {label}
        </span>
      </label>
      {helperText && (
        <span className="mt-1 text-xs text-slate-500">{helperText}</span>
      )}
      <select
        name={name}
        placeholder={placeholder}
        className={`border-grey-300 focus:border-primary focus:ring-primary mt-3 max-w-[30rem] rounded-md border border-solid bg-white !p-4 text-sm transition-colors focus:ring-2 ${
          error ? '!border-red-200 !bg-red-50 ring-2 !ring-red-700' : ''
        }`}
        onChange={onChange}
        aria-describedby={`error-${name}`}
        value={value}
        required={required}
        {...props}>
        {children}
      </select>
      {error && (
        <span id={`error-${name}`} className="mt-2 text-xs text-red-700">
          {error}
        </span>
      )}
    </div>
  )
}
