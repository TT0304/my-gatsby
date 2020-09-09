import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const allPosts = [
    ...allMarkdownRemark.edges.map(e => e.node)
  ]
  console.log(allPosts);
  console.log('Fuck you Gatsby');
  return (
    <Layout>
      {/* <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          <div key={node.id}>
            <Link
              to={node.fields.link}
            >
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </div>
        })}
      </div> */}
      {allPosts.map(node => (
          <div key={node.id}>
          <Link
            to={node.fields.link}
          >
            <h1 className="headline">
              {node.frontmatter.title}
              {/* {(() => {
                let result
                switch (node.internal.type) {
                  case "MarkdownRemark":
                    result = node.frontmatter.title
                    break
                  case "wordpress__POST":
                    result = node.title
                }
                return result
              })()} */}
            </h1>
          </Link>
        </div>
      ))}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/markdown/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            link
          }
          internal {
            type
          }
        }
      }
    }
  }
`
