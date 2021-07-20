import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import Footer from "../components/Footer/Footer";

const protocol = "https://";
const suffix = ".xo9.io";

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  // const post = postNode.frontmatter;
  const {
    frontmatter: { description, title } = { description: "", title: "" },
    post = "",
  } = postNode;
  if (post && !post.id) {
    post.id = slug;
  }

  const forwardHref = `${protocol}${title.toLowerCase()}${suffix}`;
  return (
    <Layout>
      <div className="post">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post-wrapper">
          {/* <h1 className="post-title">{post.title}</h1> */}
          <a href="/" className="post-page-home-button">
            <img src="/logo.jpg" alt="Logo" width="200px" height="200px" />
          </a>
          <a href={forwardHref} className="post-title-link">
            <h3 className="post-title">{title}</h3>
          </a>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <p>{description}</p>
          <div className="post-meta">
            {/* <PostTags tags={post.tags} /> */}
            {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
          </div>
          <Footer config={config} />
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
        date
        category
        description
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
