import Image from "next/image"
import { MovieInfoResponse } from "@/app/_types/movie"
import { imageResize } from "../../../_utils/imageResize"
import styles from "./MovieInfo.module.css"
import BackButton from "../BackButton/BackButton"

interface MovieInfoProps {
  movieInfo: MovieInfoResponse
}

const MovieInfo = ({ movieInfo }: MovieInfoProps) => {
  const moviePosterImage =
    movieInfo.Poster === "N/A"
      ? "https://placehold.co/350x520?text=No+Image"
      : imageResize(movieInfo.Poster, "SX300", "SX1200")

  const movieCoverImage =
    movieInfo.Poster === "N/A"
      ? "https://github.com/SeungHyune/next-movie/assets/114329713/05888f09-34c9-4b18-b79f-1bb1d460d5ac"
      : imageResize(movieInfo.Poster, "SX300", "SX1200")

  return (
    <section className={styles.movieInfoSection}>
      <article className={styles.movieInfoCoverImage}>
        <Image
          src={movieCoverImage}
          alt={movieInfo.Title}
          sizes="100%"
          fill
          priority
        />
      </article>
      <article className={styles.movieInfoContainer}>
        <div className={styles.moviePoster}>
          <Image
            src={moviePosterImage}
            alt={movieInfo.Title}
            sizes="100%"
            fill
            priority
          />
        </div>
        <div className={styles.movieContent}>
          <h3>
            {movieInfo.Title} <small>({movieInfo.Year})</small>
          </h3>
          <mark>{movieInfo.imdbRating}</mark>
          <ul>
            <li>
              <strong>Director</strong>
              <span>{movieInfo.Director}</span>
            </li>
            <li>
              <strong>Actors</strong>
              <span>{movieInfo.Actors}</span>
            </li>
            <li>
              <strong>Awards</strong>
              <span>{movieInfo.Awards}</span>
            </li>
            <li>
              <strong>Plot</strong>
              <span>{movieInfo.Plot}</span>
            </li>
          </ul>
        </div>
      </article>
      <BackButton>Prev Button</BackButton>
    </section>
  )
}
export default MovieInfo
