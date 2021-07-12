import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import SEO from "gatsby-theme-advanced/src/components/SEO";
import {
  PostFromJsonList,
  queryIntoPost,
  jsonPostIntoPost,
} from "gatsby-theme-advanced/src/types";

import Layout from "../../../layouts";
import Article from "../../../components/Article";
import AuthorSegment from "../../../components/AuthorSegment";
import RelatedPosts from "../../../components/RelatedPosts";

const Wrapper = styled.div`
  display: grid;

  grid-gap: 60px;
`;

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
      <Wrapper>
        <SEO post={post} />
        <Article post={post} />
        <AuthorSegment />
        <RelatedPosts list={pageContext.relatedPosts.map(jsonPostIntoPost)} />
      </Wrapper>
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
