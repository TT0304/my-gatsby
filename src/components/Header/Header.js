import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className='monospace' role="banner">
      <div className={styles.header__right}>
        <nav className={styles.nav}>
          <ul className={`${styles.nav__list} flex relative list-style-none`}>
            <li className={styles.link}>
              <div className={`${styles.link__wrapper} relative`}>
                <Link className={`${styles.link__anchor} uppercase`} to="/insight">Insight</Link>
              </div>
            </li>
          </ul>
        </nav>
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
