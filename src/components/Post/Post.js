import React from "react"
import Hero from "./Hero"
import Body from "./Body"
import styles from "./Post.module.scss"

export default function Post({ post }) {
  const { body, timeToRead } = post
  const {
    title,
    relativeDate,
    isoDate,
    featuredImage,
    category,
  } = post.frontmatter
  return (
    <article className={`post-content post--has-featured-image ${styles.post}`}>
      <Hero
        title={title}
        image={featuredImage}
        publishedAt={{ relativeDate, isoDate }}
        topic={category}
      />
      <Body body={body} readingTime={timeToRead} />
      <div className={`monospace ${styles.post__cta}`}></div>
    </article>
  )
}
