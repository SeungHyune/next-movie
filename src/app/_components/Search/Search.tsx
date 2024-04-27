"use client"

import { useRouter } from "next/navigation"
import { FormEventHandler } from "react"
import useInput from "@/app/_hooks/useInput"
import Button from "../Button/Button"
import InputText from "../InputText/InputText"
import SearchIcon from "../icons/SearchIcon/SearchIcon"
import styles from "./Search.module.css"

interface SearchProps {
  link?: string
}

const Search = ({ link }: SearchProps) => {
  const router = useRouter()
  const { search, setSearch, onChangeInput } = useInput()

  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    router.push(`${link}?search=${search}`)
    setSearch("")
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmitSearch}>
      <InputText
        type="search"
        id="search"
        name="search"
        placeholder="영화를 검색해 보세요."
        value={search}
        onChange={onChangeInput}
      />
      <Button type="submit" width="4rem" height="4rem">
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
