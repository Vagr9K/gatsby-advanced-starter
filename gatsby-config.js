const urljoin = require("url-join");
const path = require("path");

// Remark plugins
const remarkA11yEmoji = require("@fec/remark-a11y-emoji");
const remarkExternalLinks = require("remark-external-links");

// Config
const config = require("./config");

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === "" ? "/" : config.pathPrefix;

module.exports = {
  pathPrefix: validatedPathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.website.url, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.website.url, config.pathPrefix),
      feed_url: urljoin(
        config.website.url,
        config.pathPrefix,
        config.website.rss
      ),
      title: config.website.title,
      description: config.website.description,
      image_url: `${urljoin(
        config.website.url,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `react`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `./src/__generated__/gatsby-types.d.ts`,
        emitSchema: {
          "./src/__generated__/gatsby-schema.graphql": true,
          "./src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "./src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: "remark-codesandbox/gatsby",
            options: {
              mode: "button",
            },
          },
          { resolve: "gatsby-remark-copy-linked-files" },
          { resolve: "gatsby-remark-autolink-headers" },

          { resolve: "gatsby-remark-prismjs" },
        ],
        remarkPlugins: [remarkA11yEmoji, remarkExternalLinks],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [config.googleAnalyticsID],
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: config.disqusShortname,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.website.name,
        short_name: config.website.titleShort,
        description: config.website.description,
        start_url: validatedPathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("src/netlifycms/index.js"), // default: undefined
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Content Manager",
        includeRobots: false,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMdx = ref.query.allMdx;
          ret.generator = "GatsbyJS Advanced Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize({ query: { site, allMdx } }) {
              const { rssMetadata } = site.siteMetadata;
              return allMdx.edges.map((edge) => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.datePublished,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { "content:encoded": edge.node.html },
                  { author: config.user.email },
                ],
              }));
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___datePublished] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      cover
                      datePublished
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.website.rss,
            title: config.website.rssTitle,
            site_url: config.website.url,
          },
        ],
      },
    },
  ],
};
