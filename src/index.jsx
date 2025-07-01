import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import ContextProvider from "./store/appContext";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <HashRouter>
    <ContextProvider>
      <Layout />
    </ContextProvider>
  </HashRouter>
);
