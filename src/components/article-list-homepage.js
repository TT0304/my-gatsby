import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styles from "./article.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(markdown)/.*.md$/"}},
          limit: 6
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
                date(formatString: "MMMM YYYY")
                category
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <ul className={`list-style-none p0 ${styles.grid__simple}`}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li className={styles.grid__item}>
            <article className='sans-serif'>
            <h6 className={`uppercase sans-serif small mb1 bold ${styles.post__cat}`}>
              {node.frontmatter.category}
            </h6>
            {/* <p className="sans-serif line-height-4 quiet mb1 grid-txt">
              {node.excerpt}
            </p> */}
              <Link to={`journal${node.fields.slug}`} className={styles.post__link}>
              <h4 className={`big display medium mbn1 line-height-3 ${styles.post__title}`}>
              {node.frontmatter.title}
              </h4>
              </Link>
            
          <p className={`normal ${styles.post__date}`}>{node.frontmatter.date}</p>
            </article>
          </li>
        ))}
      </ul>
    )}
  />
)
