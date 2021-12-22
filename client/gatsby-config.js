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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },

    `gatsby-remark-images`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tovuti by Abubakar`,
        short_name: `Tovuti`,
        description: `Tovuti blog website`,
        start_url: `/`,
        background_color: `#0a68f0`,
        theme_color: `#0a68f0`,
        display: `standalone`,
        icon: `src/images/logosmall.svg`,
        icons: [
          {
            src: `/images/logo128.svg`,
            sizes: `192x192`,
            type: `image/svg`,
          },
          {
            src: `/images/gastby-icon.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'maskable',
          },
          {
            src: `/images/logo512.svg`,
            sizes: `512x512`,
            type: `image/svg`,
          
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/allblogs/`],
      },
    },
  ],
};
