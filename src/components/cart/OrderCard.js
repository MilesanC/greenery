import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../ui/Button";
import classes from "./OrderCard.module.css";

const OrderCard = (props) => {
  const cartCtx = useContext(CartContext);

  let shipping = 5.99;
  let total;

  if (props.subtotal <= 35) {
    total = shipping + props.subtotal;
  } else {
    total = props.subtotal;
  }

  const orderHandler = () => {
    cartCtx.clearCart();
    cartCtx.palceOrder(true);
  };

  return (
    <div className={classes.plata}>
      <div className={classes.card}>
        <div className={classes.sub}>
          <h3>Subtotal: </h3>
          <h3>${props.subtotal.toFixed(2)}</h3>
          <p>Shipping fee: </p>
          {props.subtotal <= 35 ? <p>${shipping}</p> : <p>$0</p>}
        </div>
        <div className={classes.total}>
          <h1>Total: </h1>
          <h2>${total.toFixed(2)}</h2>
        </div>
        <Button onClick={orderHandler}>Order Now</Button>
        <p className={classes.msg}>Free shipping for products over $35</p>
      </div>
    </div>
  );
};

export default OrderCard;
