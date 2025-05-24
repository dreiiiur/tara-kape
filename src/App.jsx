import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/home";
import Login from "./assets/components/login";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    );
};

export default App;
