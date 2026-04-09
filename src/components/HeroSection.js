import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
import WelcomeBanner from "./WelcomeBanner";

function HeroSection({ hero }) {
  return React.createElement(
    "section",
    { style: styles.heroSection },

    
    React.createElement(
      "div",
      null,

      
      React.createElement(WelcomeBanner, {
        title: hero.title,
        subtitle: hero.subtitle,
      }),

      
      React.createElement(
        "div",
        { style: styles.heroButtons },

        
        React.createElement(
          Link,
          { to: "/menu", style: styles.primaryButton },
          "Explore Menu"
        )
      )
    ),

    
    React.createElement(
      "div",
      { style: styles.heroImageWrap },

      React.createElement("img", {
        src: hero.image,
        alt: "Bakery hero",
        style: styles.heroImage,
      })
    )
  );
}

HeroSection.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroSection;