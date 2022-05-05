import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import classes from "./CartProduct.module.css";

const CartProduct = (props) => {
  const cartCtx = useContext(CartContext);

  const removeFromCartHandler = () => {
    cartCtx.removeFromCart(props.id);
  };

  return (
    <li className={classes.lista}>
      <div className={classes.info}>
        <div className={classes.item}>
          <img src={props.image} alt={props.name} />
          <h1>{props.name}</h1>
        </div>
        <h2>${props.price}</h2>
        <p>{props.quantity}</p>
        <h2>${(props.price * props.quantity).toFixed(2)}</h2>
        <button onClick={removeFromCartHandler}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
