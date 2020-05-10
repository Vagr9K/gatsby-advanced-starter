import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <meta name="viewport" content="width=device-width" />
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css2?family=Spectral" rel="stylesheet" />
        </Helmet>
        {children}
      </div>
    );
  }
}
