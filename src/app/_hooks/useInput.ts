import { useState } from "react"

const useInput = () => {
  const [search, setSearch] = useState("")

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return { search, setSearch, onChangeInput }
}

export default useInput
