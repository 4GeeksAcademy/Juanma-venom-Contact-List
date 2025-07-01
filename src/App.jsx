import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<AddContact />} />
    </Routes>
  );
};

export default App;
