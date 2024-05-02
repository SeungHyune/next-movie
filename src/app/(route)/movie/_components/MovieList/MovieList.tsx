"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchMovieList } from "../../_lib/fetchMovieList"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import MovieItem from "../MovieItem/MovieItem"
import styles from "./MovieList.module.css"
import Link from "next/link"
import MovieSearchResult from "../MovieSearchResult/MovieSearchResult"

interface MovieListProps {
  search: string
}

const MovieList = ({ search }: MovieListProps) => {
  const { inView, ref } = useInView()
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["movie", "search", search],
    queryFn: fetchMovieList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        Number(lastPage?.totalResults) > allPage.length * 10
          ? allPage.length + 1
          : undefined
      return nextPage
    },
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if (status === "error") {
    return <p>Error: {error.message}</p>
  }

  if (!data?.pages[0]) {
    return
  }

  const movieList = data.pages.flatMap((movie) => movie.Search)

  return (
    <section>
      <MovieSearchResult
        searchResultTitle={search}
        searchResultLength={Number(data.pages[0].totalResults)}
      />
      <ul className={styles.movieList}>
        {movieList.map((movie) => (
          <Link
            href={`/movie/info?imdbId=${movie.imdbID}`}
            title={movie.Title}
            key={movie.imdbID}
          >
            <MovieItem
              releaseYear={movie.Year}
              imageUrl={movie.Poster}
              movieTitle={movie.Title}
            />
          </Link>
        ))}
      </ul>
      <div ref={ref} style={{ backgroundColor: "red", height: "10rem" }}></div>
    </section>
  )
}

export default MovieList
