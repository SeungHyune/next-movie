import Link from "next/link"
import Search from "../Search/Search"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <article>
          <h1>
            <Link href="/" title="홈으로 이동">
              MovieTV
            </Link>
          </h1>
        </article>
        <article>
          <Search link="/movie" />
        </article>
      </section>
    </header>
  )
}

export default Header
