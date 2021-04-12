import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layouts";
import { PostListing } from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";
import { queryIntoListing } from "../types";

type TagTemplateProps = {
  data: GatsbyTypes.TagPageQuery;
  pageContext: {
    tag: string;
  };
};

export const TagTemplate = ({
  pageContext,
  data,
}: TagTemplateProps): JSX.Element => {
  const config = React.useContext(ConfigContext);

  const { tag } = pageContext;

  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.website.title}`} />
        <PostListing listing={queryIntoListing(data)} />
      </div>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___datePublished], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            datePublished
            dateModified
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
