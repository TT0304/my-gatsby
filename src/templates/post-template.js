import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { useSiteMetadata } from '../hooks'
import Title from "../components/title"
import styles from "./post.module.scss"

export default ({ data }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark
  const { title: postTitle, description: postDescription, featuredImage } = frontmatter
  const metaDescription = postDescription !== null ? postDescription : siteDescription
  return (
    <Layout>
      <SEO title={`${postTitle} | ${siteTitle}`} description={metaDescription} />
      <div id="page-content" className={styles.article}>
      {/* {markdownRemark && ( */}
        <article className="col-12">
          <div className={styles.articleHero__wrapper}>
            <div className={styles.articleHero__container}>
              <div className={`${styles.articleHero__media} lg-col-6 mb1`}>
                {featuredImage !== null && (
                  <Img
                    fluid={featuredImage.childImageSharp.fluid}
                    className="width-full lg-mrn3"
                    style={{
                      height: "460px",
                      marginBottom: "1rem"
                    }}
                    placeholderStyle={{ paddingBottom: "0" }}
                  />
                )}
              </div>
              <Title classname={`lg-col-4 md-col-8 ${styles.articleHero__text}`} text={postTitle}></Title>
            </div>
          </div>
          <div
            className="post-content serif line-height-5"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </article>
      {/* )} */}
      </div>
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
        description
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
