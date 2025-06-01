import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/home";
import Login from "./assets/components/login";
import Shop from "./assets/components/shop";
import Admin from "./assets/components/admin";
import MainLayout from "./assets/components/mainlayout";
import Register from "./assets/components/register";
import About from "./assets/components/about";
//import { ThemeProvider } from "./assets/components/themeprovider"


const App = () => {
  return (
    <>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider> */}
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
      <Route
        path="/register"
        element={
          <MainLayout>
            <Register />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />

      {/* Admin route without Header/Footer */}
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
    </>
   
    
    
  );
};

export default App;
