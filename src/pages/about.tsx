import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layouts";
import About from "../components/About";
import ConfigContext from "../context/ConfigContext";

const AboutPage = (): JSX.Element => {
  const config = React.useContext(ConfigContext);

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
        <About />
      </div>
    </Layout>
  );
};

// TODO: Make sure About contains the layout

export default AboutPage;
