import React, { useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Users from "./component/user";
import UsersDetail from "./component/userDetail";
import Header from "./component/header";

const queryClient = new QueryClient();
function App() {
  const [userID, setUserID] = useState(1);
  const [userData, setUserData] = useState(1);

  const [page, setPage] = useState("home");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-20 bg-gray-100 h-full min-h-screen">
        {page === "home" ? (
          <Users
            setUserID={setUserID}
            setUserData={setUserData}
            setPage={setPage}
          />
        ) : (
          <div>
            <Header setPage={setPage} />
            <UsersDetail userID={userID} userData={userData} />
          </div>
        )}
      </div>
      {/* <>photo</>  */}
    </QueryClientProvider>
  );
}

export default App;
