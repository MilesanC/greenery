import Button from "../ui/Button";

import classes from "./NewsletterSection.module.css";

const NewsletterSection = () => {
  return (
    <section className={classes.newsletter}>
      <h1>
        Subscribe to our newsletter and get notified every time we have a new
        offer
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
        fermentum dui, vel varius erat. Phasellus lorem lacus, faucibus at
        turpis vel, maximus consectetur augue.
      </p>
      <form>
        <input type="email" placeholder="Enter Email"/>
        <Button className={classes.btn}>Subscribe</Button>
      </form>
    </section>
  );
};

export default NewsletterSection;
