import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

// Wrapper for react-query context that will be added to the app (both for SSR and Client)
const QueryWrapper = ({
  element,
}: {
  element: React.ReactChild;
}): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {element}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default QueryWrapper;
