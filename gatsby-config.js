module.exports = {
  // pathPrefix: `/finejavascript.com`,
  siteMetadata: {
    title: `finejavascript`,
    description: `Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Software engineer`,
    author: `Juanma Perez`,
    siteUrl: `https://finejavascript.com`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141288809-1",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
           resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 740,
                linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/projects`,
        name: 'works'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `finejavascript`,
        short_name: `finejavascript`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icons/icon-manifest.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
