import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { allMarkdownRemark, allWordpressPost } = data
  const allPosts = [
    ...allMarkdownRemark.edges.map(e => e.node),
    ...allWordpressPost.edges.map(e => e.node),
  ]
  return (
    <Layout>
      {allPosts.map(node => {
        return (
          <div key={node.id}>
            <Link
              to={(() => {
                let result
                switch (node.internal.type) {
                  case "MarkdownRemark":
                    result = node.fields.link
                    break
                  case "wordpress__POST":
                    result = node.fields.link
                }
                return result
              })()}
            >
              <h1 className="headline">
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
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            link
          }
          internal {
            type
          }
        }
      }
    }
    allWordpressPost(
      sort: { fields: date, order: DESC }
      filter: { format: { eq: "standard" } }
    ) {
      edges {
        node {
          id
          title
          date
          internal {
            type
          }
          fields {
            link
          }
        }
      }
    }
  }
`
