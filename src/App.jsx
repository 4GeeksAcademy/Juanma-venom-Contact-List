import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
