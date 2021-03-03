import React from "react";
import "./index.css";
import { ConfigProvider } from "../context/ConfigContext";
import SEO from "../components/SEO";

export default function MainLayout({ children }) {
  return (
    <ConfigProvider>
      <div className="layout-container">
        <SEO postNode={null} />
        {children}
      </div>
    </ConfigProvider>
  );
}
