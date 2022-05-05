import React, { useState } from "react";

const CartContext = React.createContext({
  cart: [],
  totalProducts: 0,
  orderIsPlace: false,
  addToCart: (product) => {},
  removeFromCart: (productId) => {},
  clearCart: () => {},
  palceOrder: (order) => {},
});

export const CartContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [orderIsPlace, setOrderIsPlace] = useState(false);

  let totalProducts = [];

  const addToCartHandler = (product) => {
    if (cartProducts.some((prod) => prod.id === product.id)) {
      const indexProd = cartProducts.findIndex(
        (prod) => prod.id === product.id
      );
      cartProducts[indexProd].totalQuantity =
        cartProducts[indexProd].totalQuantity + product.totalQuantity;
    } else {
      setCartProducts((prevState) => {
        return prevState.concat(product);
      });
    }
  };

  const removeFromCartHandler = (productId) => {
    setCartProducts((prevState) => {
      return prevState.filter((product) => product.id !== productId);
    });
  };

  const clearCartHandler = () => {
    setCartProducts([]);
  };

  const palceOrderHandler = (order) => {
    setOrderIsPlace(order);
  };

  cartProducts.forEach((product) => totalProducts.push(+product.totalQuantity));

  const quantity = totalProducts.reduce((prev, acc) => prev + acc, 0);

  const context = {
    cart: cartProducts,
    totalProducts: quantity,
    orderIsPlace: orderIsPlace,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
    palceOrder: palceOrderHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
