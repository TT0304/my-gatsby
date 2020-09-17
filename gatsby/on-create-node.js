const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const filepath = createFilePath({node, getNode});
    createNodeField({
      node,
      name: 'slug',
      value: filepath
    })
  }
}
module.exports = onCreateNode;