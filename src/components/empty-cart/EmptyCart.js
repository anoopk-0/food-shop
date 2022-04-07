import React from "react";
import "./style.css";

import emptyCartImage from "../../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={emptyCartImage} alt="" />
      <button onClick={() => navigate(-1)}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
