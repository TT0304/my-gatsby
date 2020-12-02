import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
        {data.allMdx.edges.map(({ node }, index) => (
          <div
            className={`${styles.project} block items-center mb4 lg-mx0 mxn2`}
          >
            {/* <Img 
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ flex: '1', marginLeft: '-6rem'}}
          /> */}
            <img
              className={`${styles.project__featuredImg} xl-col-7 lg-col-10 ${
                index % 2 === 0 ? `xl-mln6` : `xl-mrn6`
              }`}
              src={node.frontmatter.gif.publicURL}
              alt="Blah"
            />
            <div
              className={`${styles.project__info} xl-col-6 xl-mt0 mtn6 xl-mx0 xl-p2 p1 z4 border border-thick relative  mx2`}
            >
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
