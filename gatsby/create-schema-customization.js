const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      updatedAt: Date
    }
  `
  createTypes(typeDefs)
}
module.exports = createSchemaCustomization
