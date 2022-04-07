import React from "react";
import Home from "./pages/home/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
