import { ImageDataLike } from "gatsby-plugin-image";

export type BlogPostBySlugQuery = {
  mdx?: MdxNode;
};

export type MdxListingQuery = {
  allMdx: {
    edges: { node: MdxNode }[];
  };
};

export type MdxNode = {
  body?: string;
  excerpt?: string;
  timeToRead?: number;

  fields?: {
    slug?: string;
    pathName?: string;
    route?: string;
    url?: string;
  };

  frontmatter?: {
    title?: string;
    description?: string;
    cover?: {
      publicURL?: string;
      childImageSharp?: { gatsbyImageData: ImageDataLike };
    };
    coverAlt?: string;

    category?: string;
    tags?: ReadonlyArray<string | undefined>;

    datePublished?: string;
    dateModified?: string;
  };

  internal?: {
    content?: string;
  };
};

// Post type unifies all post sources into one and is used in all components
export type Post = {
  title: string;

  description?: string;
  coverImg?: ImageDataLike;
  coverImageUrl?: string;
  coverImageAlt: string;

  datePublished: Date;
  dateModified: Date;

  category?: string;
  tags?: string[];

  body?: string;
  excerpt?: string;
  timeToRead: number;
  internalContent?: string;

  slug: string;
  route: string;
  pathName: string;
  url: string;

  relatedPosts?: PostList;
};

export type PostList = Array<Post>;

export type PostFromJson = {
  title: string;

  description?: string;
  coverImg: ImageDataLike;
  coverImageUrl?: string;
  coverImageAlt: string;

  datePublished: string;
  dateModified: string;

  category?: string;
  tags?: string[];

  excerpt?: string;
  timeToRead: number;

  slug: string;
  route: string;
  pathName: string;
  url: string;

  relatedPosts?: PostFromJsonList;
};

export type PostFromJsonList = Array<PostFromJson>;

export type FeedPageMeta = {
  current: number;
  next?: number;
  nextCount?: number;
  prev?: number;
  prevCount?: number;
  posts: PostList;
};

export type FeedPageMetaFromJson = {
  current: number;
  next?: number;
  nextCount?: number;
  prev?: number;
  prevCount?: number;
  posts: PostFromJsonList;
};

export type PostPlaceholder = {
  isPlaceholder: boolean;
  key: string;
};

export type FeedList = Array<Post | PostPlaceholder>;
