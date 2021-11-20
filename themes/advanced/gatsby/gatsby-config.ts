import path from "path";
import fs from "fs";
import urljoin from "url-join";

import { GatsbyConfig } from "gatsby";

// Remark plugins
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkExternalLinks from "remark-external-links";
import unwrapImages from "remark-unwrap-images";

// Config
import { SiteConfig, withBasePath, withDefaults } from "../src/config";

// RSS Utils
import * as RssUtils from "./utils/rss";

// Make sure that pathPrefix is not empty

const gatsbyConfig = (userConfig: SiteConfig): GatsbyConfig => {
  // Merge user and default configurations
  const config = withDefaults(userConfig);

  const validatedPathPrefix =
    config.pathPrefix === "" ? "/" : config.pathPrefix;

  const netlifyConfigPath = "./src/netlifycms/index.js";

  return {
    pathPrefix: validatedPathPrefix,
    siteMetadata: {
      config, // Make the merged configuration available via GraphQL
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
        image_url: `${urljoin(config.website.url, config.pathPrefix)}${
          config.website.logoUrl
        }`,
        copyright: config.website.copyright,
      },
    },
    plugins: [
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          modules: ["gatsby-plugin-image"],
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /\.svg$/,
          },
        },
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-lodash",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "assets",
          path: config.assetDir || path.join(__dirname, "../static"),
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: config.contentDir || path.join(__dirname, "../content"),
        },
      },
      {
        resolve: "gatsby-plugin-sharp",
        options: {
          defaults: {
            formats: ["auto", "webp", "avif"],
            placeholder: "blurred",
            backgroundColor: "transparent",
          },
          failOnError: true,
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-image",
      "gatsby-remark-images",
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: config.embeddedVideoWidth,
              },
            },
            {
              resolve: "gatsby-remark-responsive-iframe",
            },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: config.embeddedImageWidth,
                showCaptions: ["title", "alt"],
              },
            },
            {
              resolve: "remark-codesandbox/gatsby",
              options: {
                mode: "button",
              },
            },
            { resolve: "gatsby-remark-copy-linked-files" },

            {
              resolve: "gatsby-remark-prismjs",
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHighlight: false,
                prompt: {
                  user: "root",
                  host: "localhost",
                  global: false,
                },
                escapeEntities: {},
              },
            },
          ],
          remarkPlugins: [unwrapImages, remarkA11yEmoji, remarkExternalLinks],
        },
      },
      {
        resolve: "gatsby-plugin-disqus",
        options: {
          shortname: config.website.disqusShortname,
        },
      },
      {
        resolve: "gatsby-plugin-google-gtag",
        options: {
          trackingIds: [config.website.googleAnalyticsId],
        },
      },
      {
        resolve: "gatsby-plugin-nprogress",
        options: {
          color: config.website.themeColor,
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
          background_color: config.website.backgroundColor,
          theme_color: config.website.themeColor,
          display: "minimal-ui",
          cache_busting_mode: "none",
          icon: config.iconPath,
          icons: config.iconList,
        },
      },
      {
        resolve: "gatsby-plugin-offline",
        options: {
          workboxConfig: {
            globPatterns: config.iconCachePaths,
          },
        },
      },
      {
        resolve: "gatsby-plugin-netlify-cms",
        options: {
          modulePath: fs.existsSync(netlifyConfigPath)
            ? netlifyConfigPath
            : undefined,
          enableIdentityWidget: true,
          publicPath: "admin",
          htmlTitle: "Content Manager",
          includeRobots: false,
        },
      },
      {
        resolve: "gatsby-plugin-feed",
        options: {
          setup: RssUtils.setup,
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
              serialize: RssUtils.getSerialize(config),
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
                      datePublished
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
              output: withBasePath(config, config.website.rss),
              title: config.website.rssTitle,
              site_url: config.website.url,
            },
          ],
        },
      },
    ],
  };
};

export default gatsbyConfig;
