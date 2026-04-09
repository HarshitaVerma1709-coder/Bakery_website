import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";

function ProductCard({
  title,
  type,
  price,
  accent,
  image,
  onAddToCart,
  onIncrease,
  onDecrease,
  quantity,
}) {
  return React.createElement(
    "div",
    { style: styles.card },

    
    React.createElement("img", {
      src: image,
      alt: title,
      style: styles.cardImage,
    }),

    
    React.createElement(
      "div",
      { style: styles.cardBody },

      
      React.createElement(
        "span",
        {
          style: {
            ...styles.badge,
            backgroundColor: `${accent}18`,
            color: accent,
          },
        },
        type
      ),

      
      React.createElement(
        "h3",
        { style: styles.cardTitle },
        title
      ),

      
      React.createElement(
        "p",
        { style: styles.description },
        "Perfect for birthdays, gifting and simple sweet cravings."
      ),

      
      React.createElement(
        "div",
        { style: styles.cardFooter },

        
        React.createElement(
          "strong",
          { style: { color: accent, fontSize: 20 } },
          price
        ),

        
        quantity === 0
          ? React.createElement(
              "button",
              {
                onClick: onAddToCart,
                style: {
                  ...styles.smallButton,
                  backgroundColor: accent,
                },
              },
              "Add to Cart"
            )
          : React.createElement(
              "div",
              { style: styles.quantityControl },

              React.createElement(
                "button",
                {
                  onClick: onDecrease,
                  style: {
                    ...styles.quantityButton,
                    backgroundColor: accent,
                  },
                },
                "-"
              ),

              React.createElement(
                "span",
                {
                  style: {
                    ...styles.quantityValue,
                    color: accent,
                  },
                },
                quantity
              ),

              React.createElement(
                "button",
                {
                  onClick: onIncrease,
                  style: {
                    ...styles.quantityButton,
                    backgroundColor: accent,
                  },
                },
                "+"
              )
            )
      )
    )
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCard;