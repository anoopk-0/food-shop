import { CartActionTypes } from "./cart-action-type";
import { addItemToCart, removeItemToCart } from "./cart-utiles";

const intialState = {
  cartItems: [],
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
