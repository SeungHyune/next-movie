import MovieInfo from "./_components/MovieInfo/MovieInfo"
import { fetchMovieItemInfo } from "./_lib/fetchMovieItemInfo"

interface MovieInfoPageProps {
  searchParams: {
    imdbId: string
  }
}

const MovieInfoPage = async ({ searchParams }: MovieInfoPageProps) => {
  const { imdbId } = searchParams

  const movieInfo = await fetchMovieItemInfo({ imdbId })

  return <MovieInfo movieInfo={movieInfo} />
}

export default MovieInfoPage
