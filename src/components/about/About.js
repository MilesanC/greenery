import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <img
        src="https://www.gardeningknowhow.com/wp-content/uploads/2013/10/greenhouse.jpg"
        alt="Greenhouse"
      />
      <div className={classes.info}>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          fermentum dui, vel varius erat. Phasellus lorem lacus, faucibus at
          turpis vel, maximus consectetur augue. Fusce fermentum porta justo.
          Aliquam tristique eros a risus auctor sollicitudin. Pellentesque
          consectetur ligula at euismod aliquet. Nam pulvinar justo sed ultrices
          tristique. Nunc quis lacinia quam. In hac habitasse platea dictumst.
          Etiam scelerisque, libero id posuere finibus, sapien lectus viverra
          tellus, sit amet mattis metus massa a tellus. Aliquam in massa ut
          sapien euismod imperdiet. Cras varius blandit scelerisque. Phasellus
          consectetur turpis vel dolor consectetur lobortis. Sed facilisis
          mattis ipsum id accumsan. Maecenas placerat blandit luctus. Vestibulum
          non tempus ipsum, ac feugiat urna. Vivamus non purus non erat viverra
          vestibulum. Donec convallis nec nisi ut pulvinar. Nulla et libero
          posuere, pretium nisi id, pulvinar ligula. Phasellus bibendum eros eu
          felis hendrerit, eget malesuada dolor fringilla. Suspendisse eget
          congue ante. Aenean fermentum in felis non auctor.
        </p>
      </div>
    </section>
  );
};

export default About;
