import React from "react";
import NavBar from "./navbar";
import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="flex flex-col items-center  justify-start font-sans min-h-96 bg-gray-300 lg:pt-10 lg:pb-20 landingpage-bgimage ">
          <div>
            <p className="p-3 pt-12 text-4xl text-lg text-white lg:text-blue-300">
              Azania Math Solutions
            </p>
          </div>
          <div>
            <p className="p-2  text-center text-white lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
              Why Struggle with Mathematics when you can just contact us and get
              the best tutor who will help you reach your academic goals
            </p>
          </div>

          <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
            <button className="pt-2 pb-2 text-1xl font-semibold   transition-all rounded-full shadow-2xl lg:mr-5 hover:text-green-300 hover:bg-gray-500 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
              Get A Tutor Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;