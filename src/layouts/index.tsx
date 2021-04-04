import * as React from "react";
import "./index.css";
import { ConfigProvider } from "../context/ConfigContext";
import SEO from "../components/SEO";

const MainLayout: React.FC = ({ children }) => (
  <ConfigProvider>
    <div className="layout-container">
      <SEO />
      {children}
    </div>
  </ConfigProvider>
);

export default MainLayout;
