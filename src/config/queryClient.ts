import { QueryClient } from "react-query";

// eslint-disable-next-line import/no-anonymous-default-export
export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});
