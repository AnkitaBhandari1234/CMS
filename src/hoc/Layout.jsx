import React from "react";
import Navigation from "../components/navigation/Side-bar";
import Toolbar from "../components/navigation/Toolbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 w-screen h-screen  overflow-clip   ">
        <div className="col-span-2 bg-gray-400 hidden lg:block overflow-y-scroll scroll ">
          <Navigation />
        </div>
        <div className=" col-span-10  overflow-scroll  ">
          <Toolbar  />
          <div className="overflow-y-scroll h-full py-5  ">

          <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
