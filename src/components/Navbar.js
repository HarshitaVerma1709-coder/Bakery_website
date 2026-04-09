import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/styles";

function Navbar({ cartCount }) {
  return React.createElement(
    "nav",
    { style: styles.navbar },

    
    React.createElement(
      "div",
      { style: styles.logo },
      "Velvet Crumbs"
    ),

    
    React.createElement(
      "div",
      { style: styles.navLinks },

      React.createElement(
        Link,
        { style: styles.link, to: "/" },
        "Home"
      ),

      React.createElement(
        Link,
        { style: styles.link, to: "/menu" },
        "Menu"
      ),

      React.createElement(
        Link,
        { style: styles.link, to: "/about" },
        "About"
      ),

      React.createElement(
        Link,
        { style: styles.link, to: "/contact" },
        "Contact"
      ),

      React.createElement(
        Link,
        { style: styles.cartLink, to: "/cart" },
        `Cart (${cartCount})`
      )
    )
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;