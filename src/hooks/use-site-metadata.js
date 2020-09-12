import { useStaticQuery, graphql } from 'gatsby'
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                github
                twitter
              }
            }
            url
            title
            description
            copyright
          }
        }
      }
    `
  );
  return site.siteMetadata
}
export default useSiteMetadata