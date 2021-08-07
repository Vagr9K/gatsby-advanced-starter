import * as React from "react";

import { SEO } from "gatsby-theme-advanced";

import Footer from "../components/Footer";

import "./styles.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <SEO />
    <div className="layout-grid">
      {children}
      <Footer />
    </div>
  </>
);

export default MainLayout;
