/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sim Sim Lovelies`,
    image: `/img/dog-bg.jpg`,
    author: `MarkyJD`,
    description: `Registered MDBA Breeder of Toy Poodles located in the beautiful Connewarre, Victoria. We breed for health, temperament and conformation`,
    siteUrl: `https://simsimlovelies.com.au/`,
    keywords: [
      "toy poodles",
      "breeder",
      "Victoria",
      "Connewarre",
      "Australia",
      "puppies",
      "toy poodle puppies",
      "toy poodle breeder",
      "toy poodle breeder Victoria",
      "toy poodle breeder Australia",
      "toy poodle breeder Connewarre",
      "toy poodle breeder Geelong",
      "toy poodle breeder Melbourne",
      "toy poodle breeder Ballarat",
      "toy poodle breeder Bendigo",
      "toy poodle breeder Warrnambool",
      "toy poodle breeder Colac",
      "toy poodle breeder Torquay",
      "toy poodle breeder Ocean Grove",
      "toy poodle breeder Barwon Heads",
      "toy poodle breeder Bellarine Peninsula",
      "toy poodle breeder Surf Coast",
      "toy poodle breeder Bellarine",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-static-cms`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    
  ],
};
