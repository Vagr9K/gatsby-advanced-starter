import React from "react";
import styled from "styled-components";

import { SEO, Types, PostTemplateProps } from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import Article from "../../../components/Article";
import AuthorSegment from "../../../components/AuthorSegment";
import RelatedPosts from "../../../components/RelatedPosts";

const Wrapper = styled.div`
  display: grid;

  grid-gap: 60px;
`;

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const post = Types.queryIntoPost(data);

  return (
    <Layout>
      <Wrapper>
        <SEO post={post} />
        <Article post={post} />
        <AuthorSegment />
        <RelatedPosts
          list={pageContext.relatedPosts.map(Types.jsonPostIntoPost)}
        />
      </Wrapper>
    </Layout>
  );
};

export default PostTemplate;
