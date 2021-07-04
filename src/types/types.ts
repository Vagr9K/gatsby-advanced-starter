import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export type MdxListingQuery = {
  readonly allMdx: {
    readonly edges: ReadonlyArray<{
      readonly node: Pick<
        GatsbyTypes.Mdx,
        "body" | "excerpt" | "timeToRead"
      > & {
        readonly fields: GatsbyTypes.Maybe<Pick<GatsbyTypes.MdxFields, "slug">>;
        readonly frontmatter: GatsbyTypes.Maybe<
          Pick<
            GatsbyTypes.MdxFrontmatter,
            | "title"
            | "description"
            | "coverAlt"
            | "tags"
            | "category"
            | "datePublished"
            | "dateModified"
          > & {
            readonly cover?: Pick<GatsbyTypes.File, "publicURL"> & {
              readonly childImageSharp?: Pick<
                GatsbyTypes.ImageSharp,
                "gatsbyImageData"
              >;
            };
          }
        >;
        readonly internal: Pick<GatsbyTypes.Internal, "content">;
      };
    }>;
  };
};

export type MdxNode = {
  body?: string;
  excerpt?: string;
  timeToRead?: number;

  fields?: {
    slug?: string;
  };

  frontmatter?: {
    title: string;
    description?: string;

    cover?: {
      publicUrl?: string;
      childImageSharp?: IGatsbyImageData;
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

  url: string;
  slug: string;

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

  url: string;
  slug: string;

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
