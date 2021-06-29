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
            | "cover"
            | "coverAlt"
            | "tags"
            | "category"
            | "datePublished"
            | "dateModified"
          >
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

    cover?: string;
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
  coverImageUrl?: string;
  coverImageAlt?: string;

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
};

export type PostList = Array<Post>;

export type PostFromJson = {
  title: string;

  description?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;

  datePublished: string;
  dateModified: string;

  category?: string;
  tags?: string[];

  excerpt?: string;
  timeToRead: number;

  url: string;
  slug: string;
};

export type PostFromJsonList = Array<PostFromJson>;

export type FeedPageMeta = {
  current: number;
  next?: number;
  prev?: number;
  posts: PostList;
};

export type FeedPageMetaFromJson = {
  current: number;
  next?: number;
  prev?: number;
  posts: PostFromJsonList;
};
