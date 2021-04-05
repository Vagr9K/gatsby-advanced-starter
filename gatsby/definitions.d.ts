declare module "@fec/remark-a11y-emoji";

// For gatsby-node.ts

type GetMdxPostsQuery = {
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

interface BasicFrontmatter {
  title?: string;
  slug?: string;
}

// gatsby-plugin-feed

type GatsbyFeedRssMetadata = {
  site_url?: string;
  feed_url?: string;
  title?: string;
  description?: string;
  image_url?: string;
  copyright?: string;
  generator?: string;
};

type GatsbyFeedSiteQuery = {
  siteMetadata?: {
    rssMetadata?: GatsbyFeedRssMetadata;
  };
};

type GatsbyFeedMdxQuery = {
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

type GatsbyFeedQuery = {
  site?: GatsbyFeedSiteQuery;
  allMdx?: GatsbyFeedMdxQuery;
};

type GatsbyFeedConfig = {
  serialize: (GatsbyFeedData) => GatsbyPluginFeedData;
  query: string;
  output: string;
  title: string;
  site_url: string;
};

type GatsbyPluginFeedData = {
  generator: string;
  query: GatsbyFeedQuery;
  feeds: Array<GatsbyFeedConfig>;
  plugins: [];
  serialize: (GatsbyFeedData) => Array<GatsbyFeedItem | undefined> | undefined;
  output: string;
  title: string;
  site_url: string;
};

type GatsbyFeedItem = {
  categories?: string;
  date?: string;
  title?: string;
  description?: string;
  url?: string;
  guid?: string;
  custom_elements: [{ "content:encoded"?: string }, { author?: string }];
};
