import Image from "next/image"
import styles from "./MovieItem.module.css"

interface MovieItemProps {
  imageUrl: string
  movieTitle: string
  releaseYear: string
}

const MovieItem = ({ imageUrl, movieTitle, releaseYear }: MovieItemProps) => {
  return (
    <li className={styles.movie}>
      <Image src={imageUrl} alt={movieTitle} sizes="100%" priority fill />
      <div className={styles.movieContent}>
        <h5>{movieTitle}</h5>
        <span>{releaseYear}</span>
      </div>
    </li>
  )
}

export default MovieItem
