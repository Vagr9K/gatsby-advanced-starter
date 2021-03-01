import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import ConfigContext from "../context/ConfigContext";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default function PostTemplate({ data, pageContext }) {
  const config = useContext(ConfigContext);

  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.website.title}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        datePublished
        category
        tags
      }
      fields {
        slug
        datePublished
      }
    }
  }
`;
