export const addItemToCart = (cartList, addItem) => {
  const isItemExist = cartList.find((item) => item.id === addItem.id);

  if (isItemExist) {
    return cartList.map((item) =>
      item.id === addItem.id ? { ...item, quantity: item?.quantity + 1 } : item
    );
  } else {
    return [...cartList, { ...addItem, quantity: 1 }];
  }
};
export const removeItemToCart = (cartList, removeItem) => {
  const isItemExist = cartList.find((item) => item.id === removeItem.id);
  if (isItemExist.quantity === 1) {
    return cartList.filter((item) => item.id !== removeItem.id);
  } else {
    return cartList.map((item) =>
      item.id === removeItem.id
        ? { ...item, quantity: item?.quantity - 1 }
        : item
    );
  }
};
