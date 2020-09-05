require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gopi Krishna`,
    description: `Full Stack Developer at Paytm insider. I  💖  JavaScript and React.`,
    author: `@_bgopikrishna`,
    siteUrl:`https://gopikrishna.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gopi Krishna`,
        short_name: `GK`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#8083ff`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remove-console',
      options: {
        exclude: ['error', 'warn'], // <- will be removed all console calls except these
      },
    },
  ],
};
