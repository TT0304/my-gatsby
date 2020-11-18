import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks"
import Layout from "../components/Layout"
import styles from "./work.module.scss"

export default ({ data }) => {
  const metadata = useSiteMetadata()
  const author = metadata.author.name
  const { tagline } = metadata
  const { allMdx } = data
  const convertArrToStr = arr => {
    const temp = arr.join(" ")
  }
  return (
    <Layout title={`${author} | ${tagline}`} width="full" headerPosition="top">
      <div className={`container`}>
        <div className={styles.projects}>
          {allMdx.edges.map(({ node }) => (
            <div key={node.id} className={`${styles.project}`}>
              <div className={styles.project__info}>
                <div className={styles.grid}>
                  <h2 className={`${styles.project__title} huge`}>
                    {node.frontmatter.title}
                  </h2>
                  <span
                    className={`${styles.project__label} monospace normal uppercase line-height-6`}
                  >
                    {node.frontmatter.technology.join(" | ")}
                  </span>
                </div>
              </div>
              <div
                className={`${styles.project__image} border-dark border-thickish`}
              >
                <img
                  src={node.frontmatter.gif.publicURL}
                  alt={node.frontmatter.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
      edges {
        node {
          frontmatter {
            title
            type
            technology
            gif {
              publicURL
            }
          }
        }
      }
    }
  }
`
