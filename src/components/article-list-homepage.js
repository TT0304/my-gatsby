import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "./article"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            id={node.id}
            to={node.fields.slug}
            category={node.frontmatter.category}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    )}
  />
)
