/* eslint "no-console": "off" */

// Types
import { SiteConfig } from "../../src/config";
import {
  GatsbyPluginFeedData,
  GatsbyFeedRssMetadata,
  GatsbyFeedItem,
} from "../types";

export const getSerialize =
  (config: SiteConfig) =>
  (
    data: GatsbyPluginFeedData
  ): Array<GatsbyFeedItem | undefined> | undefined => {
    const {
      query: { allMdx },
    } = data;

    const edges = allMdx?.edges;

    if (!edges) {
      console.warn("No Mdx edges available for feed generation.");
      return undefined;
    }

    const res = edges.map((edge): GatsbyFeedItem | undefined => {
      const { node } = edge;

      const slug = node.fields?.slug;
      const url = slug ? config.website.url + slug : config.website.url;

      return {
        categories: node?.frontmatter?.tags,
        date: node?.frontmatter?.datePublished,
        title: node?.frontmatter?.title,
        description: node.excerpt,
        url,
        guid: url,
        custom_elements: [
          { "content:encoded": node.html },
          { author: config.user?.email },
        ],
      };
    });

    return res;
  };

export const setup = (ref: GatsbyPluginFeedData): GatsbyFeedRssMetadata => {
  const ret = ref.query?.site?.siteMetadata?.rssMetadata;

  if (!ret) {
    throw Error(
      "gatsby-plugin-feed rssMetadata is missing. Aborting feed setup."
    );
  }

  ret.generator = "GatsbyJS Advanced Starter";

  return ret;
};
