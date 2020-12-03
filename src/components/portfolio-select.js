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
        {data.allMdx.edges.map(({ node }, index) => {
          const order = (index + 1) % 2 === 0 ? "even" : "odd"
          const projectClass = ["lg-flex", "block", "items-center", "mb4"]
          const infoClass = [
            "xl-col-5",
            "lg-col-6",
            "xl-p2",
            "p1",
            "z4",
            "border",
            "border-thick",
            "relative",
          ]
          const imgClass = ["xl-col-7", "lg-col-6"]
          if (order === "even") {
            projectClass.push("lg-flex-reverse")
            imgClass.push("xl-ml3", "lg-ml2")
            // infoClass.push("xl-mr3")
          } else {
            imgClass.push("xl-mr3", "lg-mr2")
            // infoClass.push("xl-ml3")
          }
          return (
            <div className={projectClass.join(" ")}>
              {/* <Img 
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            style={{ flex: '1', marginLeft: '-6rem'}}
          /> */}
              <img
                className={`${styles.project__featuredImg} ${imgClass.join(
                  " "
                )}`}
                src={node.frontmatter.gif.publicURL}
                alt={node.frontmatter.title}
              />
              <div className={`${styles.project__info} ${infoClass.join(" ")}`}>
                <h3 className={styles.project__name}>
                  {node.frontmatter.title}
                </h3>
                <p className={styles.project__desc}>
                  {node.frontmatter.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )}
  />
)
