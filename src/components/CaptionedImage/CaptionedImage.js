import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./CaptionedImage.module.scss"

export default function CaptionedImage({ path, alt, caption }) {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)
  const image = allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === path
  )
  if (!image) return null
  return (
    <div className={styles.imageBlock}>
      <figure class={styles.figure}>
        <Img className={styles.image} fluid={image.node.fluid} alt={alt} />
        <figcaption
          className={styles.caption}
          dangerouslySetInnerHTML={{ __html: caption }}
        ></figcaption>
      </figure>
    </div>
  )
}
