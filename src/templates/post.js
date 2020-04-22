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
      <div className={styles.container}>
        <Title text={post.frontmatter.title}></Title>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#fafafa",
            backgroundImage:
              "Url(https://source.unsplash.com/960x200/?" +
              post.frontmatter.category +
              ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginBottom: "30px",
          }}
        ></div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`
