type MdxListingQuery =
  | GatsbyTypes.ListingQueryQuery
  | GatsbyTypes.TagPageQuery
  | GatsbyTypes.CategoryPageQuery;

type MdxNode = {
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

    disqus_category_id?: number;
  };

  internal?: {
    content?: string;
  };
};

// Post type unifies all post sources into one and is used in all components
type Post = {
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
  timeToRead?: number;
  internalContent?: string;

  disqus_category_id?: number;

  url: string;
  slug: string;
};

type PostListing = Array<Post>;
