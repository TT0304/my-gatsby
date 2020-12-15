import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styles from "./Body.module.scss"

export default function Body({ body, readingTime }) {
  return (
    <div className={styles.grid}>
      <section className={styles.richText}>
        <div className={`mx-auto ${styles.richText__wrapper}`}>
          <div className={styles.richText__container}>
            <div className={styles.richText__sidebar}>
              <div className={styles.readingTime}>
                {`${readingTime} min remaining`}
              </div>
            </div>
            <div
              className={`${styles.richText__content} article__body line-height-5`}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`monospace center lg-pt2 md-pt1 ${styles.articleFooter}`}
      >
        Buy me a{" "}
        <a
          href="https://ko-fi.com/bytrangle"
          target="_blank"
          rel="noopener noreferrer external"
        >
          coffee
        </a>
      </section>
    </div>
  )
}
