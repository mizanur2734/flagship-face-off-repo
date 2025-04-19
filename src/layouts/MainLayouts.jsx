import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
