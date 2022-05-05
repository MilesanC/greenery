import { useContext } from "react";

import CartContext from "../store/cart-context";
import CartProductList from "../components/cart/CartProductList";
import Button from "../components/ui/Button";
import "../index.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    cartCtx.palceOrder(false);
  };

  const emptyCart = (
    <div className="cart-empty">
      <h1>Cart is empty!</h1>
      <Link to="/products">
        <Button>Fill it</Button>
      </Link>
    </div>
  );

  const orderWasPlaced = (
    <div className="cart-empty">
      <h2>Your order was placed successfully!</h2>
      <Link to="/">
        <Button onClick={orderHandler}>Go to Home</Button>
      </Link>
    </div>
  );

  return (
    <div className="cart-page">
      {cartCtx.cart.length === 0 && !cartCtx.orderIsPlace && emptyCart}
      {cartCtx.orderIsPlace && orderWasPlaced}
      {cartCtx.cart.length !== 0 && <CartProductList cart={cartCtx.cart} />}
    </div>
  );
};

export default CartPage;
