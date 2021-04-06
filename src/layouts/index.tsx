import * as React from "react";
import "./index.css";
import { ConfigProvider } from "../context/ConfigContext";
import SEO from "../components/SEO";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ConfigProvider>
    <div className="layout-container">
      <SEO />
      {children}
    </div>
  </ConfigProvider>
);

export default MainLayout;
