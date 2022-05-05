import { Link } from "react-router-dom";
import Button from "../ui/Button";
import classes from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={classes.intro}>
      <div>
        <h1>
          "He who plants garden <br /> plants happiness"
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          semper ullamcorper nulla, id lacinia ipsum. Etiam venenatis, sapien
          quis bibendum auctor, orci orci sollicitudin justo, ac sodales arcu
          ipsum nec lacus.
        </p>
        <Link to="/products">
          <Button>Shop Now</Button>
        </Link>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0059/7360/6467/articles/IMG_0933_1a6869b8-cbfa-4588-bd4c-b896b450ac1a_800x.jpg?v=1630385336"
        alt="Plants"
      />
      <img
        className={classes.flower}
        src="https://cdn.shopify.com/s/files/1/0059/7360/6467/files/PALM12_BUFF_Optimized_large.jpg?v=1585717904"
        alt="Flower"
      />
    </section>
  );
};

export default IntroSection;
