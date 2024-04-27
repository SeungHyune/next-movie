import { CSSProperties } from "react"
import styles from "./InputText.module.css"

interface InputTextProps {
  type: "text" | "search"
  placeholder?: string
  name?: string
  id?: string
  value?: string
  style?: CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  style,
}: InputTextProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  )
}

export default InputText
