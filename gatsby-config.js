/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Do less, do better, know why",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `ihatewp.local`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],

  /* Your site config here */
}
