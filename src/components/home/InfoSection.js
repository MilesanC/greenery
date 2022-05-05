import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

import InfoBox from "./InfoBox";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={classes.infoSection}>
      <div className={classes.infoHead}>
        <h1>
          Keep planting,
          <br />
          keep growing
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          fermentum dui, vel varius erat. Phasellus lorem lacus, faucibus at
          turpis vel, maximus consectetur augue.
        </p>
      </div>
      <div className={classes.infoBox}>
        <InfoBox icon={faSeedling} title={"Planting"} />
        <InfoBox icon={faLeaf} title={"Growing"} />
        <InfoBox icon={faHandshakeAngle} title={"Helping"} />
      </div>
    </section>
  );
};

export default InfoSection;
