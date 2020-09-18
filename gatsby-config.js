/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteConfig = require('./config.js');
module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    blogTitle: siteConfig.blogTitle,
    description: siteConfig.description,
    copyright: siteConfig.copyright,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        data: `@use "src/styles/variables" as var;`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://bytrangle.surge.sh`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `ihatewp.local`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //     useACF: false,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: "blogpost",
    //     path: `${__dirname}/src/markdown`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdpost`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/src/portfolio`
      }
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
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/src/gifs`,
              ignoreFileExtensions: [`png`, `jpq`, `jpeg`]
            }
          }
          // {
          //   resolve: `gatsby-remark-interactive-gifs`,
          //   options: {
          //     root: `${__dirname}`,
          //     src: `${__dirname}/gifs`,
          //     dest: `${__dirname}/public/static/gifs`,
          //     play: `${__dirname}/src/images/play-icon.png`,
          //     relativePath: `/static/gifs`
          //   }
          // }
        ],
      },
    },
    "gatsby-transformer-sharp",
  ],

  /* Your site config here */
}
