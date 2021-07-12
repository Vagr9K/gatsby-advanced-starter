import * as React from "react";

import { ConfigProvider } from "gatsby-theme-advanced/src/context/ConfigContext";
import SEO from "gatsby-theme-advanced/src/components/SEO";

import Footer from "../components/Footer";

import "./styles.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ConfigProvider>
    <SEO />
    <div className="layout-grid">
      {children}
      <Footer />
    </div>
  </ConfigProvider>
);

export default MainLayout;
