import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<h1>login</h1>} />

        </Routes>
    );
};

export default App;
