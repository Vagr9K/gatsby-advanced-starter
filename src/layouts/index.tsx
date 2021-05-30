import * as React from "react";
import styled from "styled-components";
import { ConfigProvider } from "../context/ConfigContext";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ThemeProvider from "../theme";

const LayoutGrid = styled.div`
  min-height: 100vh;
  min-width: 100%;

  padding-top: 16px;

  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
`;

const WidthLimitedGrid = styled.div`
  padding: 0 16px 0 16px;

  justify-self: center;

  max-width: calc(1144px + 16px * 2);
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  justify-items: stretch;
`;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <ConfigProvider>
      <SEO />
      <LayoutGrid>
        <WidthLimitedGrid>
          <Navigation />
          {children}
        </WidthLimitedGrid>
        <Footer />
      </LayoutGrid>
    </ConfigProvider>
  </ThemeProvider>
);

export default MainLayout;
