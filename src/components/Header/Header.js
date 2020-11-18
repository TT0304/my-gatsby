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
            <ul className={`${styles.nav__list} flex relative list-style-none`}>
              <li className={styles.link}>
                <div className={`${styles.link__wrapper} relative`}>
                  <Link
                    className={`${styles.link__anchor} uppercase`}
                    to="/insight"
                  >
                    Insight
                  </Link>
                </div>
              </li>
            </ul>
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
