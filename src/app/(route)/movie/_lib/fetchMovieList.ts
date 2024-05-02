import { rootApi } from "@/app/_api/apiClient"
import { MovieResponse } from "@/app/_types/movie"
import { QueryFunction } from "@tanstack/react-query"

export const fetchMovieList: QueryFunction<
  MovieResponse,
  [_1: string, _2: string, search: string],
  number
> = async ({ queryKey, pageParam }) => {
  const search = queryKey[2]

  const response = await rootApi(`&s=${search}&page=${pageParam}`)

  return response
}
