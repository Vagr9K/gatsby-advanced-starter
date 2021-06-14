import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layouts";
import { PostListing } from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";
import { queryIntoListing } from "../types";
import ListingPageWrapper from "../components/shared/ListingPageWrapper";

type CategoryTemplateProps = {
  data: GatsbyTypes.CategoryPageQuery;
  pageContext: { category: string };
};

const CategoryTemplate = ({
  pageContext,
  data,
}: CategoryTemplateProps): JSX.Element => {
  const config = useContext(ConfigContext);

  const { category } = pageContext;
  return (
    <Layout>
      <Helmet
        title={`Posts in category "${category}" | ${config.website.title}`}
      />
      <ListingPageWrapper>
        <PostListing listing={queryIntoListing(data)} noHero />
      </ListingPageWrapper>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___datePublished], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

export default CategoryTemplate;
