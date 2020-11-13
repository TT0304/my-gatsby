import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styles from "./Body.module.scss"

export default function Body({ body, readingTime }) {
  return (
    <div className={styles.postContent}>
      <div className={styles.postContent__wrapper}>
        <div className={styles.postContent__container}>
          <div className={styles.postContent__sidebar}>
            <div className={styles.readingTime}>
              {`${readingTime} min remaining`}
            </div>
          </div>
          <div
            className={`${styles.postContent__content} postContent line-height-5`}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </div>
  )
}
