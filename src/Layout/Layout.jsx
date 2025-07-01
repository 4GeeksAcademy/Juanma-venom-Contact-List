// src/layout.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home"; // Asegúrate que el path es correcto
import injectContext from "./store/appContext"; // Si usas Context

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default injectContext(Layout);
