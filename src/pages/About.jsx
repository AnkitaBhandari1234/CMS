
import React from "react";
import Bannerreuse from "../components/ui/Bannerreuse";
import Aboutsection from "../components/pagecomponents/Home/Aboutsection";
import Serviceoffer from "../components/pagecomponents/About/Serviceoffer";
import Review from "../components/pagecomponents/Home/Review";

function About() {
 
  return (
    <div className="flex flex-col gap-10  ">
    <Bannerreuse />
    <Aboutsection />
    <Serviceoffer />
    <Review />



    </div>
   
  );
}

export default About;
