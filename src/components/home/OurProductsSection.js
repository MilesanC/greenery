import { Link } from "react-router-dom";
import ProductItem from "../products/ProductItem";

import Button from "../ui/Button";
import classes from "./OurProductsSection.module.css";

const OurProductsSection = (props) => {
  let loading = true;
  if (props.products.length !== 0) {
    loading = false;
  } else {
    loading = true;
  }

  return (
    <section className={classes.ourProducts}>
      <h1>Our Products</h1>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <div className={classes.productsContainer}>
          <ProductItem
            id={props.products[0].id}
            image={props.products[0].image}
            name={props.products[0].name}
            price={props.products[0].price}
          />
          <ProductItem
            id={props.products[4].id}
            image={props.products[4].image}
            name={props.products[4].name}
            price={props.products[4].price}
          />
          <ProductItem
            id={props.products[10].id}
            image={props.products[10].image}
            name={props.products[10].name}
            price={props.products[10].price}
          />
        </div>
      )}
      <Link to="/products">
        <Button>All Products</Button>
      </Link>
    </section>
  );
};

export default OurProductsSection;
