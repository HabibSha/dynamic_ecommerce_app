import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
