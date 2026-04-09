import React from "react";
import styles from "../styles/styles";

function AboutPage() {
  return React.createElement(
    "div",
    { style: styles.simplePage },

    React.createElement(
      "p",
      { style: styles.sectionTag },
      "About Us"
    ),

    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "A Bakery Website"
    ),

    React.createElement(
      "ul",
      { style: styles.list },

      React.createElement("li", null, "Uses JS throughout the project"),
      React.createElement("li", null, "Uses reusable React components"),
      React.createElement("li", null, "Uses a class component with constructor"),
      React.createElement("li", null, "Uses hooks: useState, useEffect and useMemo"),
      React.createElement("li", null, "Uses props and prop validation with PropTypes"),
      React.createElement("li", null, "Uses routing with react-router-dom"),
      React.createElement("li", null, "Uses inline styling in React")
    )
  );
}

export default AboutPage;