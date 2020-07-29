import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Title from "../components/title"
import styles from "./post.module.scss"

export default ({ data }) => {
  const { markdownRemark } = data
  const { featuredImage } = markdownRemark.frontmatter
  return (
    <Layout>
      {markdownRemark && (
        <article className="col-12">
          <div className="frontmatter max-width-3 mx-auto mb-3">
            <div className="img__container flex justify-end width-full">
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
            </div>
            <Title text={markdownRemark.frontmatter.title}></Title>
          </div>

          <div
            className="post-content serif line-height-5"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </article>
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
  }
`
