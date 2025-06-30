import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./store/appContext";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<AddContact />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
