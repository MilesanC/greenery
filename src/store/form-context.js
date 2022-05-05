import React, { useState } from "react";

const FormContext = React.createContext({
  maintenanceActiv: "",
  waterActiv: "",
  sunlightActiv: "",
  shipping: false,
  maintenanceChange: (maintenance) => {},
  waterChange: (water) => {},
  sunlightChange: (sunlight) => {},
  shippingChange: () => {},
  clearAll: () => {},
});

export const FormContextProvider = (props) => {
  const [maintenance, setMaintenance] = useState("ALL");
  const [water, setWater] = useState("ALL");
  const [sunlight, setSunlight] = useState("ALL");
  const [shipping, setShipping] = useState(false);

  const maintenanceChangeHandler = (maintenance) => {
    setMaintenance(maintenance);
  };

  const waterChangeHandler = (water) => {
    setWater(water);
  };

  const sunlightChangeHandler = (sunlight) => {
    setSunlight(sunlight);
  };

  const shippingChangeHandler = () => {
    setShipping((prevState) => (prevState = !prevState));
  };

  const clearAllHandler = () => {
    setMaintenance("ALL");
    setWater("ALL");
    setSunlight("ALL");
    setShipping(false);
  };

  const context = {
    maintenanceActiv: maintenance,
    waterActiv: water,
    sunlightActiv: sunlight,
    shipping: shipping,
    maintenanceChange: maintenanceChangeHandler,
    waterChange: waterChangeHandler,
    sunlightChange: sunlightChangeHandler,
    shippingChange: shippingChangeHandler,
    clearAll: clearAllHandler,
  };
  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
