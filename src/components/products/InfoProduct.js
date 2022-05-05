import InfoDetailProduct from "./InfoDetailProduct";
import classes from "./InfoProduct.module.css";

const InfoProduct = (props) => {
  const product = props.product;
  return (
    <div className={classes.container}>
      <div>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <h3>
          Available : <span>{product.stock ? "In Stock" : "Out of Stock"}</span>
        </h3>
        <InfoDetailProduct
          sunlight={product.direct_sunlight}
          maintenance={product.maintenance}
          water={product.water}
          shipping={product.free_shipping}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
