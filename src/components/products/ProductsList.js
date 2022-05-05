import { useContext } from "react";
import FormContext from "../../store/form-context";
import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
  const formCtx = useContext(FormContext);

  if (
    formCtx.maintenanceActiv !== "ALL" ||
    formCtx.waterActiv !== "ALL" ||
    formCtx.sunlightActiv !== "ALL"
  ) {
    const filterMaintenance = props.products.filter(
      (product) =>
        product.maintenance ===
        (formCtx.maintenanceActiv === "ALL"
          ? product.maintenance
          : formCtx.maintenanceActiv)
    );
    const filterWatre = filterMaintenance.filter(
      (product) =>
        product.water ===
        (formCtx.waterActiv === "ALL" ? product.water : formCtx.waterActiv)
    );
    const filterSunlight = filterWatre.filter(
      (product) =>
        (product.directSunlight ? "direct" : "indirect") ===
        (formCtx.sunlightActiv === "ALL"
          ? product.directSunlight
            ? "direct"
            : "indirect"
          : formCtx.sunlightActiv)
    );
    return (
      <div className={classes.lista}>
        {filterSunlight.length === 0 ? (
          <h2>Sorry, no products matched your search.</h2>
        ) : (
          ""
        )}
        {filterSunlight.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={classes.lista}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    );
  }
};

export default ProductsList;
