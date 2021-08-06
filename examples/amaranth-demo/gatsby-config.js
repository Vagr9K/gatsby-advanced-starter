module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        assetDir: "./static/",
        iconList: [
          {
            src: "/logos/logo-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/logos/logo-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/logos/logo-120x120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "/logos/logo-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/logos/logo-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/logos/logo-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/logos/logo-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/logo-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logos/logo.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "/logos/logo-maskable-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-120x120.png",
            sizes: "120x120",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logos/logo.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        website: {
          fbAppId: "1825356251115265",
          twitterName: "Vagr9K",
          url: "https://gatsby-advanced-starter-demo.netlify.com",
          googleAnalyticsId: "UA-47311644-5",
          copyright: "© Copyright 2021 | Ruben Harutyunyan",
          disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter",
          logoUrl: "/logos/logo.png",
        },

        user: {
          id: "AdvancedUser",
          firstName: "Advanced",
          lastName: "User",
          twitterName: "Vagr9K",
          linkedIn: "your-linkedin",
          github: "vagr9k",
          email: "AdvancedUser@example.com",
          location: "User Location",
          about: "A full-stack web developer looking for a challenge!",
          avatar: "https://i.pravatar.cc/300",
        },

        organization: {
          name: "Organization Name",
          description: "Organization description",
          logoUrl: "/logos/logo.png",
          url: "https://gatsby-advanced-starter-demo.netlify.com",
        },
      },
    },
  ],
};
