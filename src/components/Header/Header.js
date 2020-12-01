import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

export default function Header({ position }) {
  const header = `header__${position}`
  // const headerClass = `${styles.header__${position}}`
  // console.log(headerClass)
  return (
    <header className="monospace" role="banner">
      <div className={styles[header]}>
        {position === "right" ? (
          <nav className={styles.nav}>
            <Link className={`${styles.link} uppercase`} to="/insight">
              Insight
            </Link>
            <Link className={`${styles.link} uppercase`} to="/work">
              Work
            </Link>
          </nav>
        ) : (
          <Link to="/">Trang Le</Link>
        )}
      </div>
    </header>
  )
}
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <header className={styles.container}>
//         <Tagline text={data.site.siteMetadata.title} />
//         <div className={styles.row}>
//           <HeaderLink to="/journal" text="JOURNAL" />
//           <HeaderLink to="/about" text="ABOUT" />
//         </div>
//       </header>
//     )}
//   />
// )
