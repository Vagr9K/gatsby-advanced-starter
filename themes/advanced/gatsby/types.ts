// For gatsby-node.ts

export type GetMdxPostsQuery = {
  allMdx: {
    edges: Array<{
      node: {
        fields?: { slug?: string };
        frontmatter?: {
          title?: string;
          category?: string;
          tags?: string[];
          datePublished?: string;
        };
      };
    }>;
  };
};

export interface BasicFrontmatter {
  title?: string;
  slug?: string;
}

// gatsby-plugin-feed

export type GatsbyFeedRssMetadata = {
  site_url?: string;
  feed_url?: string;
  title?: string;
  description?: string;
  image_url?: string;
  copyright?: string;
  generator?: string;
};

export type GatsbyFeedSiteQuery = {
  siteMetadata?: {
    rssMetadata?: GatsbyFeedRssMetadata;
  };
};

export type GatsbyFeedMdxQuery = {
  edges?: [
    {
      node: {
        excerpt?: string;
        html?: string;
        timeToRead?: string;
        fields?: {
          slug?: string;
        };
        frontmatter?: {
          title?: string;
          cover?: string;
          datePublished?: string;
          category?: string;
          tags?: string;
        };
      };
    }
  ];
};

export type GatsbyFeedQuery = {
  site?: GatsbyFeedSiteQuery;
  allMdx?: GatsbyFeedMdxQuery;
};

export type GatsbyFeedConfig = {
  serialize: (
    data: GatsbyPluginFeedData
  ) => Array<GatsbyFeedItem | undefined> | undefined;
  query: string;
  output: string;
  title: string;
  site_url: string;
};

export type GatsbyPluginFeedData = {
  generator: string;
  query: GatsbyFeedQuery;
  feeds: Array<GatsbyFeedConfig>;
  plugins: [];
  output: string;
  title: string;
  site_url: string;
};

export type GatsbyFeedItem = {
  categories?: string;
  date?: string;
  title?: string;
  description?: string;
  url?: string;
  guid?: string;
  custom_elements: [{ "content:encoded"?: string }, { author?: string }];
};
