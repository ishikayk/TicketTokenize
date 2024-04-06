import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Market from "./Market";
import Buy from "./Buy";
import Pay from "./Pay";
import Navbar from "./Navbar";

const Router = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/market" element={<Market />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
