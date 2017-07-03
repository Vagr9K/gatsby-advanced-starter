module.exports = {
  siteMetadata: {
    siteTitle: 'Gatsby Material Starter',
    linkPrefix: '/gatsby-material-starter',
    googleAnalyticsID: 'UA-47311644-4',
    disqusShortname: 'https-vagr9k-github-io-gatsby-material-starter',
    postDefaultCategoryID: '12121212',
    userName: 'Material User',
    userLocation: 'Yerevan, Armenia',
    userAvatar: 'https://api.adorable.io/avatars/150/test.png',
    userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",
    copyright: 'Copyright © 2017. Material User',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
  ],
};
