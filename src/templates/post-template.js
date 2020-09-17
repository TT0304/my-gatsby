import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from '../components/Post'
import { useSiteMetadata } from '../hooks'

export default ({ data }) => {
  const { blogTitle, description: siteDescription } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark
  const { title: postTitle, description: postDescription, featuredImage } = frontmatter
  const metaDescription = postDescription !== null ? postDescription : siteDescription;
  const socialImg = featuredImage !== null ? featuredImage['publicURL'] : undefined;
  return (
    <Layout
      pageType="post"
      title={`${postTitle} | ${blogTitle}`}
      description={metaDescription}
      socialImg={socialImg}>
      <Post post={data.markdownRemark} />
      {/* <div id="page-content" className={styles.article}>
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
      </div> */}
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        category
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
          publicURL
        }
      }
      timeToRead
    }
  }
`
