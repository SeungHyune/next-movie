import { serverRootApi } from "@/app/_api/apiServer"

interface FetchMovieItemInfoProps {
  imdbId: string
}

export const fetchMovieItemInfo = async ({
  imdbId,
}: FetchMovieItemInfoProps) => {
  const response = await serverRootApi(`&i=${imdbId}&plot=full`)

  return response
}
