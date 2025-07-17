import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EnvironmentStoreProvider } from "./features/environment/EnironmentStoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EnvironmentStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EnvironmentStoreProvider>
  </React.StrictMode>
);
