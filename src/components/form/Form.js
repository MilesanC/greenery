import Button from "../ui/Button";
import Maintenance from "./Maintenance";
import Sunlight from "./Sunlight";
import Watering from "./Watering";

import classes from "./Form.module.css";
import { useContext } from "react";
import FormContext from "../../store/form-context";

const Form = () => {
  const formCtx = useContext(FormContext);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const clearHandler = () => {
    formCtx.clearAll();
  };

  return (
    <section>
      <div className={classes.content}>
        <form onSubmit={formHandler}>
          <Maintenance />
          <Watering />
          <Sunlight />
        </form>
        <div>
          <Button type={"submit"} onClick={clearHandler}>
            Clear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Form;
