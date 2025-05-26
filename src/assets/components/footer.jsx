import React from "react";

const Footer = () => {
  return (
   
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} Tara Kape. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
