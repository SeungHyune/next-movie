export interface MovieResponse {
  Search: MovieItem[]
  totalResults: string
  Response: string
}

interface MovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
