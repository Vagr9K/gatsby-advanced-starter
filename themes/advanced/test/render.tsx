import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const renderWithQueryClient = (
  children: React.ReactNode,

  options?: Omit<RenderOptions, "wrapper">
): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    options
  );

export default renderWithQueryClient;
