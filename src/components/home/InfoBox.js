import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from './InfoBox.module.css'

const InfoBox = (props) => {
  return (
    <div className={classes.box}>
      <FontAwesomeIcon icon={props.icon} />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
        fermentum dui, vel varius erat. Phasellus lorem lacus, faucibus at
        turpis vel, maximus consectetur augue.
      </p>
    </div>
  );
};

export default InfoBox;
