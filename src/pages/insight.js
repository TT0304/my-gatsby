import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks"
import styles from "./insight.module.scss"

export default ({ data }) => {
  const { blogTitle, author } = useSiteMetadata()
  const authorName = author["name"]
  const { allMdx } = data
  const allPosts = [...allMdx.edges.map(e => e.node)]
  return (
    <Layout title={`${blogTitle} | ${authorName}`}>
      <div className={`${styles.articleList} lg-col-10 mx-auto pb4`}>
        <ul className={styles.post__wrapper}>
          {allPosts.map(node => {
            const { slug } = node.fields
            const { excerpt } = node
            // const { featuredImage, title, description, date } = node.frontmatter
            // const { path: imgPath } = featuredImage
            const { title, description, date } = node.frontmatter
            const teaser = description !== null ? description : excerpt
            return (
              <li
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-easing="ease-out"
                className={`${styles.post__item} relative list-style-none`}
                key={node.id}
              >
                <small
                  className={`${styles.post__date} monospace absolute big line-height-4`}
                >
                  {date}
                </small>
                <Link to={slug}>
                  {/* <Img
                    className={styles.img__wrapper}
                    fluid={imgPath.childImageSharp.fluid}
                  /> */}
                  <div className={styles.post__text}>
                    <h2
                      className={`${styles.post__title} display medium line-height-3 inline`}
                    >
                      {title}
                    </h2>
                    <span className={styles.post__divider}>—</span>
                    <span className={styles.post__teaser}>{teaser}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
// export const pageQuery = graphql`
//   query {
//     allMdx(
//       filter: { fileAbsolutePath: { regex: "/insight/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             featuredImage {
//               path {
//                 childImageSharp {
//                   fluid(maxWidth: 800) {
//                     ...GatsbyImageSharpFluid
//                     presentationWidth
//                   }
//                 }
//               }
//             }
//             title
//             date(formatString: "MMM.DD.YYYY")
//             category
//             description
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/insight/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM.DD.YYYY")
            category
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
