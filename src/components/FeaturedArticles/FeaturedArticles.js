import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "./article.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(insight)/.*.md$/" } }
          limit: 1
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                description
                date(formatString: "MMMM YYYY")
                category
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul className={`list-style-none p0 ${styles.grid__simple}`}>
        {data.allMdx.edges.map(({ node }) => {
          const { category, title, description } = node.frontmatter
          return (
            <li className={styles.post__wrapper}>
              <Link
                to={`journal${node.fields.slug}`}
                className={styles.post__link}
              >
                <article className={`sans-serif pb3 lg-flex ${styles.post}`}>
                  <div
                    className={`${styles.post__info} lg-col-4 lg-mr1 line-height-3`}
                  >
                    <div>
                      <span
                        className={`normal monospace ${styles.post__category}`}
                      >
                        {category}
                      </span>
                      <span className="medium">{title}</span>
                    </div>
                  </div>
                  <div className={`lg-col-8 ${styles.post__preview}`}>
                    <p>{description}</p>
                  </div>
                  {/* <h6
                className={`uppercase sans-serif small mb1 bold ${styles.post__cat}`}
              >
                {node.frontmatter.category}
              </h6>
              
                <h4
                  className={`big display medium mbn1 line-height-3 ${styles.post__title}`}
                >
                  {node.frontmatter.title}
                </h4>
              

              <p className={`normal ${styles.post__date}`}>
                {node.frontmatter.date}
              </p> */}
                </article>
              </Link>
            </li>
          )
        })}
      </ul>
    )}
  />
)
