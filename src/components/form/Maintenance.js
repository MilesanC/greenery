import { useContext } from "react";

import FormContext from "../../store/form-context";
import classes from "./Maintenance.module.css";

const Maintenance = () => {
  const formCtx = useContext(FormContext);

  const maintenanceHandler = (maintenance) => {
    formCtx.maintenanceChange(maintenance);
  };

  return (
    <div className={classes.maintenance}>
      <h1>Maintenance</h1>
      <button
        type="submit"
        onClick={() => maintenanceHandler("ALL")}
        className={formCtx.maintenanceActiv === "ALL" ? classes.active : ""}
      >
        ALL
      </button>
      <button
        type="submit"
        onClick={() => maintenanceHandler("low")}
        className={formCtx.maintenanceActiv === "low" ? classes.active : ""}
      >
        Low
      </button>
      <button
        type="submit"
        onClick={() => maintenanceHandler("average")}
        className={formCtx.maintenanceActiv === "average" ? classes.active : ""}
      >
        Average
      </button>
      <button
        type="submit"
        onClick={() => maintenanceHandler("high")}
        className={formCtx.maintenanceActiv === "high" ? classes.active : ""}
      >
        High
      </button>
    </div>
  );
};

export default Maintenance;
