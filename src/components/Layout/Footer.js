import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Website by <b>Călin Mileșan</b>
      </p>
      <p>© Greenery 2022</p>
    </footer>
  );
};

export default Footer;
