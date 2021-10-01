module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
    
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-PCLLN9S",
      includeInDevelopment: false,
      defaultDataLayer: {
        platform: "gatsby"
      },  
    }, 
    resolve: `gatsby-theme-amaranth`,
      options: {
        basePath: "/",
        pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
        contentDir: "./content", // Directory for MDX posts. Defaults to "content".
        assetDir: undefined, // Asset directory. Defaults to "static".
        embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
        embeddedVideoWidth: 920, // MDX embedded video width in pixels
        iconPath: "./static/logos/logo.png", // Icon used for manifest icon creation.
        iconList: [
          {
            src: "./static/logos/logo-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-120x120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./static/logos/logo.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "./static/logos/logo-maskable-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-120x120.png",
            sizes: "120x120",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./static/logos/logo.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        iconCachePaths: ['**/static/logos*'], // Glob pattern path for the icons to be cached by the gatsby-plugin-offline
          website: {
            title: "Blog do Combatente Rico", // Homepage title
            titleShort: "Blog do CR", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
            name: "Blog do Combatente Rico", // Website name used for homescreen (PWA) and SEO
            description: "Atalhos e estratégias para fazer sobrar dinheiro.", // Website description used for RSS feeds/meta description tag
            language: "pt-BR", // Sets the global HTML lang attribute
            logoUrl: "static/logos/logo.png", // Logo used for SEO
           // fbAppId: "5", // FB Application ID for using app insights
            twitterName: "diegoayres.oficial5", // Twitter handle of the website
            url: "https://blog.combatenterico.com.br", // Domain of your website without the pathPrefix
            rss: "/rss.xml", // Path to the RSS file
            rssTitle: "RSS Feed | Blog do CR", // Title of the RSS feed
            copyright: "Combatente Rico®", // Copyright string for the footer of the website and RSS feed.
            themeColor: "#225c3b", // Used for setting manifest and progress theme colors.
            backgroundColor: "#efffed", // Used for setting manifest background color.
          },
          organization: {
              name: "Combatente Rico",
              description: "Educação Financeira para Militares",
              logoUrl: "/static/logos/logo.png",
              url: "https://www.combatenterico.com.br",
             },
            user: {
              id: "DiegoAyres",
              firstName: "Diego",
              lastName: "Ayres",
              twitterName: "diegoayres.oficial",  // twitter = IG
              github: "diegoayres.oficial",  // github = FB
              linkedIn: "UCFX9cA98AWbtqABnOFuGQMA", //  linkedIn = YouTube
              email: "suporte@combatenterico.com.br",
              location: "Brasil",
              about: "Ajudo militares a fazer sobrar dinheiro para viajar ou investir. Visite as redes sociais.",
              avatar: "https://res.cloudinary.com/dgabedu0m/image/upload/v1632716191/diego_ayres_xdf6kq.jpg",
            },
          // Gatsby Configuration

          
          },
          },
  ],
};



// instagramP: diegoayres.oficial
// facebookP: diegoayres.oficial
// youtubeC: UCFX9cA98AWbtqABnOFuGQMA

