import { useContext } from "react";

import FormContext from "../../store/form-context";
import classes from "./Watering.module.css";

const Watering = () => {
  const formCtx = useContext(FormContext);

  const waterHandler = (water) => {
    formCtx.waterChange(water);
  };

  return (
    <div className={classes.watering}>
      <h1>Watering</h1>
      <button
        type="submit"
        className={formCtx.waterActiv === "ALL" ? classes.active : ""}
        onClick={() => waterHandler("ALL")}
      >
        ALL
      </button>
      <button
        type="submit"
        className={formCtx.waterActiv === "rare" ? classes.active : ""}
        onClick={() => waterHandler("rare")}
      >
        Rare
      </button>
      <button
        type="submit"
        className={formCtx.waterActiv === "regularly" ? classes.active : ""}
        onClick={() => waterHandler("regularly")}
      >
        Regularly
      </button>
      <button
        type="submit"
        className={formCtx.waterActiv === "frequently" ? classes.active : ""}
        onClick={() => waterHandler("frequently")}
      >
        Frequently
      </button>
    </div>
  );
};

export default Watering;
