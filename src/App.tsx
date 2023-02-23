import { Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { AppRoutes } from "./routes/AppRoutes";

import PageTemplate from "./PageTemplate";


function App() {
  return (
    <PageTemplate>
      <AuthProvider>
        <Routes>
          {AppRoutes}
        </Routes>
      </AuthProvider>
    </PageTemplate>

  )

};


export default App;
