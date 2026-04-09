import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";

function FlavourSelector({ flavours, selectedFlavour, onSelectFlavour }) {
  return React.createElement(
    "section",
    { style: styles.section },

    
    React.createElement(
      "p",
      { style: styles.sectionTag },
      "Our Flavours"
    ),

    
    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "Choose your favourite flavour"
    ),

    
    React.createElement(
      "div",
      { style: styles.flavourRow },

      flavours.map((flavour) =>
        React.createElement(
          "button",
          {
            key: flavour.id,
            onClick: () => onSelectFlavour(flavour.name),
            style: {
              ...styles.flavourButton,
              backgroundColor:
                selectedFlavour === flavour.name
                  ? flavour.accent
                  : "#ffffff",
              color:
                selectedFlavour === flavour.name
                  ? "#ffffff"
                  : "#5b4040",
              border: `1px solid ${flavour.accent}`,
            },
          },

          
          React.createElement("span", null, flavour.emoji),
          " ",
          flavour.name
        )
      )
    )
  );
}

FlavourSelector.propTypes = {
  flavours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedFlavour: PropTypes.string.isRequired,
  onSelectFlavour: PropTypes.func.isRequired,
};

export default FlavourSelector;