import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import { ConfigProvider } from "../context/ConfigContext";

export default function MainLayout({ children }) {
  return (
    <ConfigProvider>
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    </ConfigProvider>
  );
}
