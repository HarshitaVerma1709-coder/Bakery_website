import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";

class WelcomeBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Freshly baked with love",
    };
  }

  render() {
    return React.createElement(
      "div",
      { style: styles.banner },

      
      React.createElement(
        "p",
        { style: styles.bannerText },
        this.state.message
      ),

      
      React.createElement(
        "h1",
        { style: styles.heroTitle },
        this.props.title
      ),

      
      React.createElement(
        "p",
        { style: styles.heroSubtitle },
        this.props.subtitle
      )
    );
  }
}

WelcomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WelcomeBanner;