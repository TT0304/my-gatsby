import React from "react"
import styles from "./Letswork.module.scss"

export default function Letswork() {
  return (
    <div className={`${styles.letswork} flex border-dark border-top-thickish py3`}>
      <div className={`${styles.letswork__container} flex flex-column`}>
        <h2 className={styles.letswork__cta}>Need a blazing fast website, app that help you sell more?
          <br />I can help.
        </h2>
        <span className="pt2">Drop me a line at bytrangle@gmail.com</span>
      </div>
    </div>
  )
}