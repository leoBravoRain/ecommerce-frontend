import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import queryClient from "./config/queryClient";
import { store } from "./redux/store";

import Pages from "./pages/Pages";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
