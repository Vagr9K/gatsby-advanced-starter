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

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <div>
        <SEO postNode={postNode} />
        <div>
          <h1>{post.title}</h1>
          <MDXRenderer>{postNode.body}</MDXRenderer>
          <div className="post-meta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} mobile={false} />
          </div>
          <UserInfo expanded={false} />
          <Disqus postNode={postNode} />
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        cover
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
