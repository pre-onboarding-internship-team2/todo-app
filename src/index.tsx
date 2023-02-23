import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import PageTemplate from "./PageTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PageTemplate>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </PageTemplate>
);
