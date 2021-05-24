import * as React from "react";
import styled from "styled-components";
import { ConfigProvider } from "../context/ConfigContext";
import SEO from "../components/SEO";
import Typography from "./Typography";
import Color from "./Color";
import CssReset from "./CssReset";

const LayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 20px;
`;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ConfigProvider>
    <CssReset />
    <Typography />
    <Color />
    <LayoutContainer>
      <SEO />
      {children}
    </LayoutContainer>
  </ConfigProvider>
);

export default MainLayout;
