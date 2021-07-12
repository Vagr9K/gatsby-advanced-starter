import React from "react";
import { graphql } from "gatsby";

import SEO from "gatsby-theme-advanced/src/components/SEO";
import {
  PostFromJsonList,
  queryIntoPost,
  jsonPostIntoPost,
} from "gatsby-theme-advanced/src/types";
import { GatsbyTypes } from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import Article from "../../../components/Article";
import FeedListing from "../../../components/FeedListing";

import "./styles.css";

type PageContext = {
  relatedPosts: PostFromJsonList;
};
type PostTemplateProps = {
  data: GatsbyTypes.BlogPostBySlugQuery;
  pageContext: PageContext;
};

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(data);

  return (
    <Layout>
      <SEO post={post} />
      <div className="post-wrapper">
        <Article post={post} />
        <div className="related-posts-wrapper">
          <h1>Related posts:</h1>
          <FeedListing
            listing={pageContext.relatedPosts.map(jsonPostIntoPost)}
          />
        </div>
      </div>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        description
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        coverAlt
        datePublished
        dateModified
        category
        tags
      }
      fields {
        slug
        route
        pathName
        url
      }
      internal {
        content
      }
    }
  }
`;

export default PostTemplate;
