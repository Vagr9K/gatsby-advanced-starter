/* eslint "no-console": "off" */

// Here we convert data from multiple sources into a unified Post type
// Post data validation is also done here, hence cosnole logs/warnings are allowed
// so we can notify the user during the build stage

import urlJoin from "url-join";
import config from "../config";

import { MdxNode, Post, MdxListingQuery } from "./types";

// Re-export types
export * from "./types";

// Generate a baseURL
export const getBaseUrl = (): string =>
  urlJoin(config.website.url, config.pathPrefix);

// Get full post URL
export const getFullUrl = (slug: string): string => urlJoin(getBaseUrl(), slug);

// Convert MDX based GraphQL query responses into a Post object
export function mdxNodeIntoPost(mdxNode: MdxNode): Post {
  const { frontmatter } = mdxNode;

  if (!frontmatter)
    throw Error(
      `Post missing frontmatter. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. Aborting.`
    );

  if (!frontmatter.datePublished)
    throw Error(
      `Post missing publication date. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. Aborting.`
    );

  if (!mdxNode.fields)
    throw Error(
      `Post missing fields. Post title: ${frontmatter.title}. Aborting.`
    );

  if (!mdxNode.fields.slug)
    throw Error(
      `Post missing slug. Post title: ${frontmatter.title}. Aborting.`
    );

  if (!frontmatter.cover)
    console.warn(
      `Post missing cover image. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. SEO capabilities will be limited.`
    );

  if (!frontmatter.description)
    console.warn(
      `Post missing description. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. SEO capabilities will be limited.`
    );

  const fullUrl = getFullUrl(mdxNode.fields.slug);

  const tagList = frontmatter.tags
    ? frontmatter.tags.filter(
        (tag: string | undefined): tag is string => typeof tag !== "undefined"
      )
    : [];

  return {
    title: frontmatter.title,

    description: frontmatter.description,
    coverImageUrl: frontmatter.cover,
    coverImageAlt: frontmatter.coverAlt,

    datePublished: new Date(frontmatter.datePublished),
    dateModified: new Date(
      frontmatter.dateModified || frontmatter.datePublished
    ),

    category: frontmatter.category,
    tags: tagList,

    body: mdxNode.body,
    internalContent: mdxNode.internal?.content,
    excerpt: mdxNode.excerpt,
    timeToRead: mdxNode.timeToRead,

    url: fullUrl,
    slug: mdxNode.fields.slug,

    disqus_category_id: frontmatter.disqus_category_id,
  };
}

// Convert MDX post query into a Post
export const queryIntoPost = (data: GatsbyTypes.BlogPostBySlugQuery): Post => {
  const postData = data.mdx;
  if (!postData)
    throw Error(
      "convertPostQueryResponseIntoPost: Query doesn't contain post data. Aborting."
    );

  return mdxNodeIntoPost(postData);
};

// Convert MDX based GraphQL query responses into a Post list
export const queryIntoListing = (listing: MdxListingQuery): Array<Post> => {
  const { edges } = listing.allMdx;

  const nodes = edges.map((edge: { node: MdxNode }) => edge.node);

  return nodes.map((node) => mdxNodeIntoPost(node));
};
