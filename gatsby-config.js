module.exports = {
  plugins: [{
      resolve: `gatsby-theme-amaranth`,
      options: {
        basePath: "/",
         website: {
            title: "Blog do Combatente Rico", // Homepage title
            titleShort: "Blog do CR", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
            name: "Blog do Combatente Rico", // Website name used for homescreen (PWA) and SEO
            description: "Atalhos e estratégias.", // Website description used for RSS feeds/meta description tag
            language: "pt", // Sets the global HTML lang attribute
            logoUrl: "static/logos/logo.png", // Logo used for SEO
            fbAppId: "5", // FB Application ID for using app insights
            twitterName: "5", // Twitter handle of the website
            url: "https://blog.combatenterico.com.br", // Domain of your website without the pathPrefix
            rss: "/rss.xml", // Path to the RSS file
            rssTitle: "RSS Feed | Blog do CR", // Title of the RSS feed
            copyright: "Combatente Rico®", // Copyright string for the footer of the website and RSS feed.
            themeColor: "#225c3b", // Used for setting manifest and progress theme colors.
            backgroundColor: "#efffed", // Used for setting manifest background color.
            organization: {
              name: "Combatente Rico",
              description: "Educação Financeira para Militares",
              logoUrl: "/logos/logo.png",
              url: "https://www.combatenterico.com.br",
             },
            user: {
              id: "DiegoAyres",
              firstName: "Diego",
              lastName: "Ayres",
              twitterName: "diegoayres.oficial",  // twitter = IG
              github: "diegoayres.oficial",  // github = FB
              linkedIn: "UCFX9cA98AWbtqABnOFuGQMA", //  linkedIn = YouTube
           // instagramP: "diegoayres.oficial",
           // facebookP: "diegoayres.oficial",
           // youtubeC: "UCFX9cA98AWbtqABnOFuGQMA",
              email: "suporte@combatenterico.com.br",
              location: "Brasil",
              about: "Ex-militar da aeronáutica, deixou as forças armadas para seguir a carreira de hipnoterapeuta",
              avatar: "/logos/diego-ayres.jpg",
            },
        // Gatsby Configuration
        pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
        contentDir: "./content", // Directory for MDX posts. Defaults to "content".
        assetDir: undefined, // Asset directory. Defaults to "static".
        embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
        embeddedVideoWidth: 920, // MDX embedded video width in pixels
        iconPath: "/logos", // Icon used for manifest icon creation.
        iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline
      },
    },
  }
  
  ],
}