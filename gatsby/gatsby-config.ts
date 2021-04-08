/* eslint "no-console": "off" */

import urljoin from "url-join";
import path from "path";

// Remark plugins
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkExternalLinks from "remark-external-links";

// Config
import config from "../src/config";

// Types
import {
  GatsbyPluginFeedData,
  GatsbyFeedRssMetadata,
  GatsbyFeedItem,
} from "./types";

// Make sure that pathPrefix is not empty
const validatedPathPrefix = config.pathPrefix === "" ? "/" : config.pathPrefix;

const gatsbyConfig = {
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
        path: `${__dirname}/../static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/../content/`,
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: config.disqusShortname,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
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
        modulePath: path.resolve("src/netlifycms/index.js"),
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Content Manager",
        includeRobots: false,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref: GatsbyPluginFeedData): GatsbyFeedRssMetadata {
          const ret = ref.query?.site?.siteMetadata?.rssMetadata;

          if (!ret) {
            throw Error(
              "gatsby-plugin-feed rssMetadata is missing. Aborting feed setup."
            );
          }

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
            serialize(
              data: GatsbyPluginFeedData
            ): Array<GatsbyFeedItem | undefined> | undefined {
              const {
                query: { allMdx },
              } = data;

              const edges = allMdx?.edges;

              if (!edges) {
                console.warn(`No Mdx edges available for feed generation.`);
                return undefined;
              }

              const res = edges.map((edge): GatsbyFeedItem | undefined => {
                const { node } = edge;

                if (!node) return undefined;

                const slug = node.fields?.slug;
                const url = slug
                  ? config.website.url + slug
                  : config.website.url;

                return {
                  categories: node?.frontmatter?.tags,
                  date: node?.frontmatter?.datePublished,
                  title: node?.frontmatter?.title,
                  description: node.excerpt,
                  url,
                  guid: url,
                  custom_elements: [
                    { "content:encoded": node.html },
                    { author: config.user.email },
                  ],
                };
              });

              return res;
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

export default gatsbyConfig;
