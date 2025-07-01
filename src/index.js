import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Layout from "./Layout"; // Sigue usando Layout

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <HashRouter>
    <Layout />
  </HashRouter>
);
