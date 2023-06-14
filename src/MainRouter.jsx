import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hover from "./Components/HOC/Hover";
import Navbar from "./Pages/Navbar";
import NavigateComp from "./Pages/NavigateComp";

const MainRouter = () => {
  return (
    <>
      <div className="text-center">
        
        <BrowserRouter>
        <Navbar/>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<NavigateComp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainRouter;
