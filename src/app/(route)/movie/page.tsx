import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import MovieList from "./_components/MovieList/MovieList"
import { fetchMovieList } from "./_lib/fetchMovieList"

interface MoviePageProps {
  searchParams: {
    search: string
  }
}

const MoviePage = async ({ searchParams }: MoviePageProps) => {
  const { search } = searchParams

  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["movie", "search", search],
    queryFn: fetchMovieList,
    initialPageParam: 1,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <MovieList search={search} />
    </HydrationBoundary>
  )
}

export default MoviePage
