import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import styles from "./post.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  const { markdownRemark, wordpressPost } = data
  const { featuredImage } = markdownRemark.frontmatter
  return (
    <Layout>
              {featuredImage !== null && (
                <Img
                  fluid={featuredImage.childImageSharp.fluid}
                  className="lg-col-10 md-col-10 sm-col-12 xs-col-12"
                  style={{
                    height: "460px",
                  }}
                  placeholderStyle={{ paddingBottom: "0" }}
                />
              )}
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
    wordpressPost(id: { eq: $id }) {
      title
      featured_media {
        source_url
      }
      content
    }
  }
`
