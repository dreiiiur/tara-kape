import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/home";
import Login from "./assets/components/login";
import Shop from "./assets/components/shop";
import Admin from "./assets/components/admin";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default App;
