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
        </Helmet>
        {children}
      </div>
    );
  }
}
