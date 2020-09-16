import React from "react"
import styles from "./Layout.module.scss"

export default function Layout ({ children, width, pageType }) {
  const classname = width === "max" ? "max-width-4 mx-auto" : "";
  return (
    <div id={pageType} className={styles.overlay}>
      <main className={classname}>
        {children}
      </main>
    </div>
  )
}
