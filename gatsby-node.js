const path = require("path")
const { slash } = require("gatsby-core-utils")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  // if the node type is MarkdownRemark, create the slug.
  // basePath is the folder where the Markdown files are stored
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "markdown" })
    createNodeField({
      node,
      name: "link",
      value: `/journal${slug}`,
      // value: slug,
    })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    console.log(slug)
  } else if (node.internal.type === "wordpress__POST") {
    const slug = node.slug
    createNodeField({
      node,
      name: "link",
      value: `/journal/${slug}/`,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // Extract an action called createPage
  const { createPage } = actions
  // this action returns a promise
  // query a list of all Markdown slugs in this site
  const result = await graphql(`
    query {
      allWordpressPost(filter: { format: { eq: "standard" } }) {
        edges {
          node {
            id
            slug
            fields {
              link
            }
          }
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              link
              slug
            }
          }
        }
      }
    }
  `)
  const arr = [
    ...result.data.allMarkdownRemark.edges.map(e => e.node),
    ...result.data.allWordpressPost.edges.map(e => e.node),
  ]
  arr.forEach(el => {
    createPage({
      path: el.fields.link,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: el.id,
      },
    })
  })
}
