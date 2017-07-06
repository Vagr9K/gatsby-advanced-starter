module.exports = {
  pathPrefix: '/gatsby-material-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteMetadata: {
    siteTitle: 'Gatsby Material Starter', // Site title.
    disqusShortname: 'https-vagr9k-github-io-gatsby-material-starter', // Disqus shortname.
    postDefaultCategoryID: 'Tech', // Default category for posts.
    userName: 'Material User', // Username to display in the author segment.
    userLocation: 'Yerevan, Armenia', // User location to display in the author segment.
    userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
    userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: 'Website',
        url: '//mywebsite.example.local',
        iconClassName: 'fa fa-link',
      },
      {
        label: 'GitHub',
        url: '//github.com.local/USER',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Twitter',
        url: '//twitter.local/USER',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'Instagram',
        url: '//instagram.local/USER',
        iconClassName: 'fa fa-instagram',
      },
      {
        label: 'Facebook',
        url: '//facebook.com.local/USER',
        iconClassName: 'fa fa-facebook',
      },
      {
        label: 'Enail',
        url: 'mailto:gmail.com.local/USER',
        iconClassName: 'fa fa-envelope',
      },
    ],
    copyright: 'Copyright © 2017. Material User', // Copyright string in the footer of the website.
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47311644-4',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
  ],
};
