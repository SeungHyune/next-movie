"use client"

import styles from "./Button.module.css"

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "danger"
  width?: number | string
  height?: number | string
  border?: string
  borderRadius?: string
  fontSize?: string
  fontWeight?: number
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({
  type = "button",
  variant = "danger",
  width,
  height,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  children,
  onClick,
}: ButtonProps) => {
  const handleClickButton = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      style={{
        width,
        height,
        border,
        borderRadius,
        fontSize,
        fontWeight,
      }}
      onClick={handleClickButton}
    >
      {children}
    </button>
  )
}

export default Button
