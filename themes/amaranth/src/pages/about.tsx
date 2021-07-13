import * as React from "react";
import { Helmet } from "react-helmet";

import { ConfigContext } from "gatsby-theme-advanced";

import Layout from "../layouts";

// TODO: Update this page

const AboutPage = (): JSX.Element => {
  const config = React.useContext(ConfigContext);

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
      </div>
    </Layout>
  );
};

// TODO: Make sure About contains the layout

// ts-prune-ignore-next
export default AboutPage;
