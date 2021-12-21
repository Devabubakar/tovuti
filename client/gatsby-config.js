module.exports = {
  siteMetadata: {
    title: `Tovuti Blog`,
    description: `Tovuti Blog`,
    author: `@🚀AbubakarAli`,
    siteUrl: `https://github.com/Devabubakar/`,
    categories: [
      'UI/UX Design',
      'Web Development',
      'Typography',
      'FreeLancing',
      'LifeStyle',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'g7vadz56', ////vnkupgyb
        dataset: 'production',
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tovuti by Abubakar`,
        short_name: `Tovuti`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icons: `src/images/gatsby-icon.png`,
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
        legacy: false,
      },
    },

    `gatsby-remark-images`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-manifest`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
