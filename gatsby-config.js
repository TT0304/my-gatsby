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
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `ihatewp.local`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //     useACF: false,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
  ],

  /* Your site config here */
}
