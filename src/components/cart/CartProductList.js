import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Button from "../ui/Button";
import CartProduct from "./CartProduct";
import classes from "./CartProductList.module.css";
import OrderCard from "./OrderCard";

const CartProductList = (props) => {
  const cartCtx = useContext(CartContext);

  let subtotal = 0;

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  return (
    <div>
      <div className={classes.head}>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <ul className={classes.lista}>
        {props.cart.map((product) => {
          subtotal = subtotal + (product.price * product.totalQuantity);
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.totalQuantity}
            />
          );
        })}
      </ul>
      <div className={classes.buttons}>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
        <Button className={classes.clear} onClick={clearCartHandler}>
          Clear Cart
        </Button>
      </div>
      <OrderCard subtotal={subtotal} />
    </div>
  );
};

export default CartProductList;
