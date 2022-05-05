import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.product}>
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <div className={classes.detail}>
          <p>{props.name}</p>
          <span>
            <p>${props.price}</p>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
