import React from "react";
import PropTypes from "prop-types";
import bakeryData from "../data/bakeryData";
import styles from "../styles/styles";
import ProductCard from "../components/ProductCard";

function MenuPage({ onAddToCart, onIncrease, onDecrease, getItemQuantity }) {
  return React.createElement(
    "div",
    { style: styles.simplePage },

    React.createElement(
      "p",
      { style: styles.sectionTag },
      "Menu Page"
    ),

    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "Our best sellers"
    ),

    React.createElement(
      "p",
      { style: styles.description },
      "Cakes, pastries, cupcakes, jars and cookies made in premium flavours."
    ),

    React.createElement(
      "div",
      { style: styles.cardGrid },

      bakeryData.flavours.flatMap((flavour) =>
        flavour.items.map((item) =>
          React.createElement(ProductCard, {
            key: item.id,
            title: item.title,
            type: `${flavour.name} ${item.type}`,
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
    )
  );
}

MenuPage.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  getItemQuantity: PropTypes.func.isRequired,
};

export default MenuPage;