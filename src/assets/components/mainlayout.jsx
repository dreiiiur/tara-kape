// src/assets/components/MainLayout.jsx
import React from "react";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
