import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./InfoDetailProduct.module.css";

const InfoDetailProduct = (props) => {
  const check = (
    <FontAwesomeIcon icon={faCircleCheck} className={classes.green} />
  );
  const wrong = (
    <FontAwesomeIcon icon={faCircleXmark} className={classes.red} />
  );

  return (
    <div className={classes.container}>
      <table className={classes.lista}>
        <tbody>
          <tr>
            <th>Direct Sunlight</th>
            <th>Maintenance</th>
            <th>Watering</th>
            <th>Free shipping</th>
          </tr>
          <tr>
            <td>{props.sunlight ? check : wrong}</td>
            <td>{props.maintenance}</td>
            <td>{props.water}</td>
            <td>{props.shipping ? check : wrong}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoDetailProduct;
