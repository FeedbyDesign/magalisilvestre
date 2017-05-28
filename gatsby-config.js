module.exports = {
  siteMetadata: {
    title: `Magali Silvestre`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 500,
              backgroundColor: `transparent`,
              quality: 100
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.05rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          // `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,

  ]
}
