import { QueryClientProvider } from "react-query";

import queryClient from "./config/queryClient";

import Pages from "./pages/Pages";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
  );
}

export default App;
