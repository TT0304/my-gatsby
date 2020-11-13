const path = require("path")
const { slash } = require("gatsby-core-utils")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
module.exports = createPages
