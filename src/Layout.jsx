import React from "react";
import injectContext from "./store/appContext";
import App from "./App";

const Layout = () => {
  return <App />;
};

export default injectContext(Layout);
