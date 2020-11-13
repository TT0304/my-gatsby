import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./portfolio-select.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query Portfolio {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(portfolio)/.*.md$/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                gif {
                  relativePath
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        {data.allMdx.edges.map(({ node }) => (
          <div className={`${styles.project} items-center mb3`}>
            {/* <Img 
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ flex: '1', marginLeft: '-6rem'}}
          /> */}
            <img
              className={styles.project__featuredImg}
              src={node.frontmatter.gif.publicURL}
              alt="Blah"
            />
            <div className={`${styles.project__info} z4 border-thick`}>
              <h3 className={styles.project__name}>{node.frontmatter.title}</h3>
              <p className={styles.project__desc}>
                {node.frontmatter.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)
