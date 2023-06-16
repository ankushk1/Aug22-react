import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hover from "./Components/HOC/Hover";
import Navbar from "./Pages/Navbar";
import NavigateComp from "./Pages/NavigateComp";
import FormComponent from "./Components/FormComponent";
import Signin from "./Components/Signin";
import ProductsLanding from "./Components/Products/ProductsLanding";

const MainRouter = () => {
  return (
    <>
      <div className="text-center">
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/products" element={<ProductsLanding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainRouter;
