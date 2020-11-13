import React from "react"
import Hero from "./Hero"
import Body from "./Body"
import styles from "./Post.module.scss"

export default function Post({ post }) {
  const { body, timeToRead } = post
  const { title, date, featuredImage, category } = post.frontmatter
  return (
    <article className={styles.post}>
      <Hero title={title} image={featuredImage} date={date} topic={category} />
      <Body body={body} readingTime={timeToRead} />
    </article>
  )
}
