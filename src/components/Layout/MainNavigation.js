import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import classes from "./MainNavigation.module.css";
import CartContext from "../../store/cart-context";

const MainNavigation = () => {
  const cartCtx = useContext(CartContext);

  return (
    <header>
      <nav className={classes.navigation}>
        <Link to="/">
          <h1>Greenery</h1>
        </Link>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
        <Link to="/cart">
          <p>
            Cart
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{`${cartCtx.totalProducts}`}</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default MainNavigation;
