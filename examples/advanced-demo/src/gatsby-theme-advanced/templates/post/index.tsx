import React from "react";

import { SEO, Types, PostTemplateProps } from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import Article from "../../../components/Article";
import FeedListing from "../../../components/FeedListing";

import "./styles.css";

const Post = ({ data, pageContext }: PostTemplateProps): JSX.Element => {
  const post = Types.queryIntoPost(data);

  return (
    <Layout>
      <SEO post={post} />
      <main className="post-wrapper">
        <Article post={post} />
        <div className="related-posts-wrapper">
          <h1>Related posts:</h1>
          <FeedListing
            listing={pageContext.relatedPosts.map(Types.jsonPostIntoPost)}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Post;
