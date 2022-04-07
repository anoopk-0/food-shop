import { CartActionTypes } from "./cart-action-type";

export const cartAddItem = (item) => {
  return {
    type: CartActionTypes.CART_ADD_ITEM,
    payload: item,
  };
};

export const cartRemoveItem = (item) => {
  return {
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: item,
  };
};
