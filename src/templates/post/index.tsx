import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../../layouts";
import SEO from "../../components/SEO";

import Article from "../../components/Article";
import AuthorSegment from "../../components/AuthorSegment";
import RelatedPosts from "../../components/RelatedPosts";

import { PostFromJsonList, queryIntoPost, jsonPostIntoPost } from "../../types";

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
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        description
        cover
        coverAlt
        datePublished
        dateModified
        category
        tags
      }
      fields {
        slug
      }
      internal {
        content
      }
    }
  }
`;

export default PostTemplate;
