import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById("scroll-container");

      if (container) {
        container.scrollTop = 0; 
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;