import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layouts";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import "./b16-tomorrow-dark.css";
import "./post.css";

import { convertPostQueryResponseIntoPost } from "../types";

type Props = {
  data: GatsbyTypes.BlogPostBySlugQuery;
  pageContext: { slug: string };
};

const PostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const post = convertPostQueryResponseIntoPost(data);

  if (!post.body)
    throw Error(
      `PostTemplate: post date doesn't contain MDX body for rendering. Aborting. ${data.toString()}`
    );

  return (
    <Layout>
      <div>
        <SEO post={post} />
        <div>
          <h1>{post.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <div className="post-meta">
            <PostTags tags={post.tags || []} />
            <SocialLinks
              postSlug={slug}
              postTitle={post.title}
              postExcerpt={post.excerpt}
              mobile={false}
            />
          </div>
          <UserInfo expanded={false} />
          <Disqus
            postSlug={slug}
            postTitle={post.title}
            postCategoryId={post.disqus_category_id}
          />
          <Footer />
        </div>
      </div>
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
        disqus_category_id
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
