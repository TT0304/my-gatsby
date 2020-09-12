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
  }
  //  else if (node.internal.type === "wordpress__POST") {
  //   const slug = node.slug
  //   createNodeField({
  //     node,
  //     name: "link",
  //     value: `/journal/${slug}/`,
  //   })
  // }
}
exports.createPages = async ({ graphql, actions }) => {
  // Extract an action called createPage
  const { createPage } = actions
  // this action returns a promise
  // query a list of all Markdown slugs in this site
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              link
            }
          }
        }
      }
    }
  `)

  // const wpTemplate = path.resolve(`./src/templates/wordpress-post.js`)
  const mdTemplate = path.resolve(`./src/templates/post-template.js`)
  // result.data.allWordpressPost.edges.forEach(edge => {
  //   createPage({
  //     path: edge.node.fields.link,
  //     component: slash(wpTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.link,
      component: slash(mdTemplate),
      context: {
        // Data passed to context is available in page queries
        // as GraphQL variables.
        id: node.id,
      },
    })
  })
}
