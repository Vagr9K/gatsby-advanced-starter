import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layouts";
import SEO from "../components/SEO";

import { queryIntoPost } from "../types";

type PostTemplateProps = {
  data: GatsbyTypes.BlogPostBySlugQuery;
  pageContext: { slug: string };
};

const PostTemplate = ({
  data,
  pageContext,
}: PostTemplateProps): JSX.Element => {
  const { slug } = pageContext;
  const post = queryIntoPost(data);

  if (!post.body)
    throw Error(
      `PostTemplate: post date doesn't contain MDX body for rendering. Aborting. Post slug: ${slug}`
    );

  return (
    <Layout>
      <div>
        <SEO post={post} />
        <div>
          <h1>{post.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
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
