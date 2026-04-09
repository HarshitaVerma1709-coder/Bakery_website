import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";
import ProductCard from "./ProductCard";

function MenuCards({
  flavour,
  onAddToCart,
  onIncrease,
  onDecrease,
  getItemQuantity,
}) {
  return React.createElement(
    "section",
    { style: styles.section },

    React.createElement(
      "div",
      {
        style: {
          ...styles.highlightBox,
          borderLeft: `6px solid ${flavour.accent}`,
        },
      },
      React.createElement(
        "p",
        { style: styles.sectionTag },
        "Selected flavour"
      ),
      React.createElement(
        "h2",
        {
          style: {
            ...styles.sectionTitle,
            marginBottom: 8,
          },
        },
        flavour.name
      ),
      React.createElement(
        "p",
        { style: styles.description },
        flavour.description
      )
    ),

    React.createElement(
      "div",
      { style: styles.cardGrid },
      flavour.items.map((item) =>
        React.createElement(ProductCard, {
          key: item.id,
          title: item.title,
          type: item.type,
          price: item.price,
          accent: flavour.accent,
          image: item.image,
          quantity: getItemQuantity(item.id),
          onAddToCart: () => onAddToCart(item, flavour),
          onIncrease: () => onIncrease(item, flavour),
          onDecrease: () => onDecrease(item.id),
        })
      )
    )
  );
}

MenuCards.propTypes = {
  flavour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  getItemQuantity: PropTypes.func.isRequired,
};

export default MenuCards;