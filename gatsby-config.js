module.exports = {
  plugins: [{
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PCLLN9S",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: {
          platform: "gatsby"
        },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },

    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        website: {
          title: "Blog do Combatente Rico", // Homepage title
          titleShort: "Blog do CR", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
          name: "Blog do Combatente Rico", // Website name used for homescreen (PWA) and SEO
          description: "Atalhos e estratégias.", // Website description used for RSS feeds/meta description tag
          language: "pt", // Sets the global HTML lang attribute
          logoUrl: "/logos/logo-1024.png", // Logo used for SEO
          fbAppId: "5", // FB Application ID for using app insights
          twitterName: "5", // Twitter handle of the website
          url: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without the pathPrefix
          rss: "/rss.xml", // Path to the RSS file
          rssTitle: "RSS Feed | Blog do CR", // Title of the RSS feed
          copyright: "© Copyright 2021 | Combatente Rico", // Copyright string for the footer of the website and RSS feed.
          themeColor: "#225c3b", // Used for setting manifest and progress theme colors.
          backgroundColor: "#efffed", // Used for setting manifest background color.

          organization: {
            name: "Combatente Rico",
            description: "oo description",
            logoUrl: "/logos/logo.png",
            url: "https://www.combatenterico.com.br",
          },
          user: {
            id: "DiegoAyres",
            firstName: "Diego",
            lastName: "Ayres",
            twitterName: "Vagr9K",
            email: "suporte@combatenterico.com.br",
            location: "Brasil",
            about: "Ex-militar da aeronáutica, deixou as forças armadas para seguir a carreira de hipnoterapeuta",
            avatar: "https://i.pravatar.cc/300",

          },
          iconList: [{
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

        },

        // Gatsby Configuration
        pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

        contentDir: "./content", // Directory for MDX posts. Defaults to "content".
        assetDir: undefined, // Asset directory. Defaults to "static".

        embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
        embeddedVideoWidth: 920, // MDX embedded video width in pixels

        iconPath: "docs/logos/logo.png", // Icon used for manifest icon creation.
        iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

        basePath: "", // Base path for mounting pages. Allows for multiple themes to be used in a single website.

      },
    },
  ],
};