import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layouts";
import ConfigContext from "../context/ConfigContext";

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
