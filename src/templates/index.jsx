import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  }
  return <span>{props.text}</span>;
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO postEdges={group} />

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <PostListing postEdges={group} dateFormat={config.dateFormatOutput} />

      <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      <NavLink test={last} url={nextUrl} text="Go to Next Page" />
    </div>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
