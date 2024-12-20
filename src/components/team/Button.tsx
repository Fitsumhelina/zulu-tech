import React, { ButtonHTMLAttributes } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 '
  
  const variantStyles = {
    primary: 'dark:text-whitetext-gray-800 hover:text-lg',
    secondary: 'text-gray-800  ',
    ghost: 'bg-transparent text-gray-600 '
  }

  const sizeStyles = {
    sm: 'py-1.5 text-sm',
    md: ' py-2 text-base',
    lg: ' py-3 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

