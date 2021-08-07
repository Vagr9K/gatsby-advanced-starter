/* eslint "no-console": "off" */

// Here we convert data from multiple sources into a unified Post type
// Post data validation is also done here, hence cosnole logs/warnings are allowed
// so we can notify the user during the build stage
import {
  MdxNode,
  Post,
  MdxListingQuery,
  PostFromJson,
  BlogPostBySlugQuery,
} from "./types";

// Re-export types
export * from "./types";

// Re-export the config types
export type {
  SiteConfig,
  OrganizationData,
  UserData,
  WebsiteData,
} from "../config";

// Convert MDX based GraphQL query responses into a Post object
export function mdxNodeIntoPost(mdxNode: MdxNode): Post {
  const { frontmatter } = mdxNode;

  if (!frontmatter)
    throw Error(
      `Post missing frontmatter. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. Aborting.`
    );

  if (!frontmatter.title)
    throw Error(
      `Post missing title. Post slug: ${
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

  if (!mdxNode.fields.pathName)
    throw Error(
      `Post missing pathName. Post slug: ${mdxNode.fields.slug}. Aborting.`
    );

  if (!mdxNode.fields.url)
    throw Error(
      `Post missing url. Post slug: ${mdxNode.fields.slug}. Aborting.`
    );

  if (!mdxNode.fields.route)
    throw Error(
      `Post missing route. Post slug: ${mdxNode.fields.slug}. Aborting.`
    );

  if (!mdxNode.timeToRead)
    throw Error(
      `Post missing timeToRead. Post slug: ${mdxNode.fields.slug}. Aborting.`
    );

  if (!frontmatter.cover)
    throw Error(
      `Post missing cover image. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. Aborting.`
    );

  if (!frontmatter.coverAlt)
    throw Error(
      `Post missing cover alt. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. Aborting.`
    );

  if (!frontmatter.description)
    console.warn(
      `Post missing description. Post slug: ${
        mdxNode.fields?.slug || "not defined"
      }. SEO capabilities will be limited.`
    );

  const tagList = frontmatter.tags
    ? frontmatter.tags.filter(
        (tag: string | undefined): tag is string => typeof tag !== "undefined"
      )
    : [];

  return {
    title: frontmatter.title,

    description: frontmatter.description,
    coverImg: frontmatter.cover.childImageSharp?.gatsbyImageData,
    coverImageUrl: frontmatter.cover.publicURL,
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

    slug: mdxNode.fields.slug,
    route: mdxNode.fields.route,
    pathName: mdxNode.fields.pathName,
    url: mdxNode.fields.url,
  };
}

// Convert MDX post query into a Post
export const queryIntoPost = (data: BlogPostBySlugQuery): Post => {
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

  const nodes = edges.map((edge) => edge.node);

  return nodes.map((node) => mdxNodeIntoPost(node));
};

// Convert PostMeta to a Post
export const jsonPostIntoPost = (meta: PostFromJson): Post => {
  const {
    dateModified,
    datePublished,
    slug,
    route,
    pathName,
    url,
    timeToRead,
    title,
    category,
    coverImg,
    coverImageAlt,
    coverImageUrl,
    description,
    excerpt,
    tags,
    relatedPosts,
  } = meta;

  return {
    title,

    description,
    coverImg,
    coverImageUrl,
    coverImageAlt,

    datePublished: new Date(datePublished),
    dateModified: new Date(dateModified),

    category,
    tags,

    excerpt,
    timeToRead,

    slug,
    route,
    pathName,
    url,

    relatedPosts: relatedPosts ? relatedPosts.map(jsonPostIntoPost) : undefined,
  };
};
