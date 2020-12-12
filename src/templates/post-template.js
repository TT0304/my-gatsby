import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Layout from "../components/Layout"
import Post from "../components/Post"
import { useSiteMetadata } from "../hooks"

deckDeckGoHighlightElement()

export default ({ data }) => {
  const { blogTitle, description: siteDescription } = useSiteMetadata()
  const { frontmatter } = data.mdx
  const {
    title: postTitle,
    description: postDescription,
    titledImage,
  } = frontmatter
  const metaDescription =
    postDescription !== null ? postDescription : siteDescription
  const socialImg = titledImage !== null ? titledImage["publicURL"] : undefined
  return (
    <Layout
      pageType="post"
      title={`${postTitle} | ${blogTitle}`}
      description={metaDescription}
      socialImg={socialImg}
    >
      <Post post={data.mdx} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        category
        description
        titledImage {
          path {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
            publicURL
          }
          credit
        }
      }
      timeToRead
    }
  }
`
