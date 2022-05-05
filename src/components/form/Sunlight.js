import { useContext } from "react";
import FormContext from "../../store/form-context";

import classes from "./Sunlight.module.css";

const Sunlight = () => {
  const formCtx = useContext(FormContext);

  const sunlightHandler = (sunlight) => {
    formCtx.sunlightChange(sunlight);
  };

  return (
    <div className={classes.sunlight}>
      <h1>Sunlight</h1>
      <button
        type="submit"
        className={formCtx.sunlightActiv === "ALL" ? classes.active : ""}
        onClick={() => sunlightHandler("ALL")}
      >
        ALL
      </button>
      <button
        type="submit"
        className={formCtx.sunlightActiv === "direct" ? classes.active : ""}
        onClick={() => sunlightHandler("direct")}
      >
        Direct
      </button>
      <button
        type="submit"
        className={formCtx.sunlightActiv === "indirect" ? classes.active : ""}
        onClick={() => sunlightHandler("indirect")}
      >
        Indirect
      </button>
    </div>
  );
};

export default Sunlight;
