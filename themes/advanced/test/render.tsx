import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { config as configFixture } from "../../test/fixtures";
import ConfigContext from "../src/context/ConfigContext";

const queryClient = new QueryClient();

const renderWithContext = (
  children: React.ReactNode,
  context = configFixture,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult =>
  render(
    <ConfigContext.Provider value={context}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigContext.Provider>,
    options
  );

export default renderWithContext;
