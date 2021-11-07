import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import Post from "./component/post";
import Users from "./component/user";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Post /> */}
      <Users />
    </QueryClientProvider>
  );
}

export default App;
