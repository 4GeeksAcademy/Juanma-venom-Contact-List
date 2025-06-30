import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./store/appContext";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const App = () => {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Contact />} />
                    <Route path="/add" element={<AddContact />} />
                    <Route path="/edit/:id" element={<AddContact />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
};

export default App;
