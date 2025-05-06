import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Exchange from "../components/Exchange";
import About from "../components/About";
import Error from "../components/Error";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default Routing;
