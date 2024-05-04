import Image from "next/image"
import styles from "./MovieItem.module.css"
import { imageResize } from "../../_utils/imageResize"

interface MovieItemProps {
  imageUrl: string
  movieTitle: string
  releaseYear: string
}

const MovieItem = ({ imageUrl, movieTitle, releaseYear }: MovieItemProps) => {
  console.log(imageUrl)
  const moviePosterImage =
    imageUrl === "N/A"
      ? "https://placehold.co/264x430?text=No+Image"
      : imageResize(imageUrl, "SX300", "SX700")

  return (
    <li className={styles.movie}>
      <Image
        src={moviePosterImage}
        alt={movieTitle}
        sizes="100%"
        priority
        fill
      />
      <div className={styles.movieContent}>
        <h5>{movieTitle}</h5>
        <span>{releaseYear}</span>
      </div>
    </li>
  )
}

export default MovieItem
