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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8a4baf`,
        theme_color: `#8a4baf`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:100,300,400,700,900,900i`],
        display: "swap",
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "easycommit",
}
