import React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/SEO";

import { PostFromJsonList, queryIntoPost } from "../../types";

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
    <>
      <SEO post={post} />
      <pre>
        <code>{JSON.stringify(post, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(pageContext, null, 2)}</code>
      </pre>
    </>
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
