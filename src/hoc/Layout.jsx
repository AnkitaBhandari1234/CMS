import React from "react";
import Navigation from "../components/navigation/Side-bar";
import Toolbar from "../components/navigation/Toolbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 w-screen h-screen overflow-y-scroll  ">
        <div className="col-span-2 bg-gray-400 hidden lg:block ">
          <Navigation />
        </div>
        <div className=" col-span-10  overflow-clip  ">
          <Toolbar  />
          <div className="overflow-y-scroll h-full ">

          <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
