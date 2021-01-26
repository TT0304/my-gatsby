import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Layout from "../components/Layout"
import Post from "../components/Post"
import PostWithoutFeaturedImage from "../components/PostWithoutFeaturedImage"
import { useSiteMetadata } from "../hooks"

deckDeckGoHighlightElement()

export default ({ data }) => {
  const { blogTitle, description: siteDescription } = useSiteMetadata()
  const { frontmatter } = data.mdx
  const {
    title: postTitle,
    description: postDescription,
    featuredImage,
  } = frontmatter
  const metaDescription =
    postDescription !== null ? postDescription : siteDescription
  const socialImg = featuredImage.path
    ? featuredImage.path.publicURL
    : undefined
  return (
    <Layout
      pageType="post"
      title={`${postTitle} | ${blogTitle}`}
      description={metaDescription}
      socialImg={socialImg}
    >
      {featuredImage.path ? (
        <Post post={data.mdx} />
      ) : (
        <PostWithoutFeaturedImage post={data.mdx} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        isoDate: date(formatString: "YYYY-MMM-DD")
        updatedAt
        category
        description
        featuredImage {
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
