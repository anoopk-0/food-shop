import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartAddItem, cartRemoveItem } from "../../redux/cart/cart-action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart-selector";
import MenuButton from "../menu-button/MenuButton";

import "./style.css";

const MenuItems = ({
  item,
  cartList,
  cartCount,
  cardItemAdd,
  cartItemRemove,
}) => {
  const { id, img, name, price, info } = item;

  let handleItemQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const finditem = cartList.find((item) => item.id === id);

      if (finditem) {
        quantity = finditem.quantity;
      }
    }

    return quantity;
  };

  return (
    <div>
      <div className="item">
        <img src={img} alt="food" />
        <div className="item-head_desc">
          <p className="head_desc-name">{name}</p>
          <p className="head_desc-info">
            <small>{info}</small>
          </p>
        </div>
        <div className="item-foot_desc">
          <span className="foot_desc-price">${price}</span>
          <MenuButton
            quantity={handleItemQuantity()}
            handleAddItem={() => cardItemAdd(item)}
            handleRemoveitem={() => cartItemRemove(item)}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cardItemAdd: (item) => dispatch(cartAddItem(item)),
  cartItemRemove: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
