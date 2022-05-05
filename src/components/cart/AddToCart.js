import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Button from "../ui/Button";
import classes from "./AddToCart.module.css";

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(1);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addToCart({
      id: props.id,
      image: props.product.image,
      name: props.product.name,
      price: props.product.price,
      totalQuantity: quantity,
    });
  };

  const subHandler = () => {
    setQuantity((prevState) =>
      prevState === 1 ? (prevState = 1) : (prevState = prevState - 1)
    );
  };

  const addHandler = () => {
    setQuantity((prevState) =>
      prevState === 9 ? (prevState = 9) : (prevState = prevState + 1)
    );
  };

  return (
    <div className={classes.container}>
      <h2>Quantity:</h2>
      <div className={classes.add}>
        <button onClick={subHandler}>-</button>
        <h1>{quantity}</h1>
        <button onClick={addHandler}>+</button>
      </div>
      <Link to="/cart">
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </Link>
    </div>
  );
};

export default AddToCart;
