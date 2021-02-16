import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import ConfigContext from "../context/ConfigContext";

function AboutPage() {
  const config = useContext(ConfigContext);

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
        <About />
      </div>
    </Layout>
  );
}

// TODO: Make sure About contains the layout

export default AboutPage;
