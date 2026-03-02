import React from 'react'
import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryDark focus:ring-primary',
    secondary: 'bg-primarySurface text-primary hover:bg-[#d4f0f8] focus:ring-primarySurface',
    outline:
      'border border-primary text-primary bg-transparent hover:bg-primarySurface focus:ring-primary',
  }

  const sizes = {
    sm: 'px-5 py-2 text-bodySmall',
    md: 'px-6 py-3 text-bodyMedium',
    lg: 'px-8 py-3.5 text-bodyMedium',
  }

  return (
    <button className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
