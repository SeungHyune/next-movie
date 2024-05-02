import styles from "./MovieSearchResult.module.css"

interface MovieSearchResultProps {
  searchResultTitle: string
  searchResultLength: number
}

const MovieSearchResult = ({
  searchResultTitle,
  searchResultLength,
}: MovieSearchResultProps) => {
  return (
    <h2 className={styles.searchResult}>
      <strong>{searchResultTitle}</strong>
      <span>총 {searchResultLength}건 검색</span>
    </h2>
  )
}

export default MovieSearchResult
