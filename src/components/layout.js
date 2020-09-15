import React from "react"
import styles from "./layout.module.scss"
import Header from "./Header/Header.js"
import Footer from "./footer.js"

// export default ({ children }) => (
//   <div className={`pb3 ${styles.container}`}>
//     <Header />
//     <main className="px3 pb3" role="main">{children}</main>
// <Footer>Made with the awesome static site generator
//   <a href="https://www.gatsbyjs.org"> Gatsby.js</a>
//   </Footer>
//   </div>
// )
export default function Layout ({ children, width }) {
  const classname = width === "max" ? "max-width-4 mx-auto" : "";
  return (
    <div id="main" className={styles.container} role="main">
      <div className={classname}>
        {children}
      </div>
    </div>
  )
}
