module.exports = {
  siteMetadata: {
    title: `easycommit`,
    description: `we develop and maintain web/mobile applications for startups, enterprises and tech teams.`,
    author: `@prescindivel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `easy commit`,
        short_name: `easycommit`,
        start_url: `/`,
        background_color: `#5BC0BE`,
        theme_color: `#5BC0BE`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `700`, `900i`],
          },
        ],
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
  ],
}
