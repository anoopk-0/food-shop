import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import "./style.css";

const CartCountButton = ({ cartCount = 0 }) => {
  //can also use history push, which is there in useHistory();

  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i class="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);
