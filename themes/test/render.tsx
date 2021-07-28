import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { config as configFixture } from "./fixtures";
import ConfigContext from "../advanced/src/context/ConfigContext";

const queryClient = new QueryClient();
const QueryClientWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const renderWithContext = (
  children: React.ReactNode,
  context = configFixture,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult =>
  render(
    <ConfigContext.Provider value={context}>
      <QueryClientWrapper>{children}</QueryClientWrapper>
    </ConfigContext.Provider>,
    options
  );

export default renderWithContext;
