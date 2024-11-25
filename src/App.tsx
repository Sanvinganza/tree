import { QueryClient, QueryClientProvider } from "react-query";
import { Root } from "./components/root";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

export default App;
