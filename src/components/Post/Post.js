import React from 'react'
import Hero from './Hero'
import Body from './Body'
import styles from './Post.module.scss'

export default function Post({post}) {
  const { html, timeToRead } = post;
  const {title, date, featuredImage} = post.frontmatter;
  return (
    <div className={styles.post}>
      <Hero title={title} image={featuredImage} date={date} />
      <Body body={html} readingTime={timeToRead} />
    </div>
  )
}