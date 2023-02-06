/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `pcgame-a2z`,
    siteUrl: `https://pcgame-a2z.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet", "gatsby-plugin-emotion", "gatsby-plugin-google-gtag", "gatsby-plugin-sitemap", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};
