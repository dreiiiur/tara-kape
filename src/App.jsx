import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/home";
import Login from "./assets/components/login";
import Shop from "./assets/components/shop";
import Admin from "./assets/components/admin";
import MainLayout from "./assets/components/mainlayout";

const App = () => {
  return (
    <Routes>
      {/* Routes with Header + Footer */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/shop"
        element={
          <MainLayout>
            <Shop />
          </MainLayout>
        }
      />

      {/* Admin route without Header/Footer */}
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
};

export default App;
