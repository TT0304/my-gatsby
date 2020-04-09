import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { allMarkdownRemark, allWordpressPost } = data
  const allPosts = [
    ...allMarkdownRemark.edges.map(e => e.node),
    ...allWordpressPost.edges.map(e => e.node),
  ]
  return allPosts.map(node => {
    return (
      <Layout>
        <div>
          <h1>
            {(() => {
              let result
              switch (node.internal.type) {
                case "MarkdownRemark":
                  result = node.frontmatter.title
                  break
                case "wordpress__POST":
                  result = node.title
              }
              return result
            })()}
          </h1>
        </div>
      </Layout>
    )
  })
}
export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: 'DD MMMM, YYYY')
                    }
                    fields {
                        slug
                    }
                    internal {
                        type
                    }
                }
            }
        }
        allWordpressPost(sort: {fields: date}) {
            edges {
                node {
                    id
                    title
                    internal {
                        type
                    }
                    slug
                }
            }
        }
    }
`
