import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Market from "./Market";
import About from "./About.jsx";
import Pay from "./Pay.jsx";
import Navbar from "./Navbar";
import RecordSearch from "./checkin";
import CreateEvent from "./organise";
import MyTickets from "./myticket.jsx";

const Router = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/market" element={<Market />} />
        <Route path="/pay" element={<Pay />} /> 
        <Route path="/record" element={<RecordSearch />} />
        <Route path="/organise" element={<CreateEvent />} />  
        <Route path="/mytickets" element={<MyTickets />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
