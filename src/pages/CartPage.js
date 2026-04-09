import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";

function CartPage({ cartItems, onPlaceOrder, onIncrease, onDecrease }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.priceNumber * item.quantity,
    0
  );

  return React.createElement(
    "div",
    { style: styles.simplePage },

    React.createElement(
      "p",
      { style: styles.sectionTag },
      "Your Cart"
    ),

    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "Selected bakery items"
    ),

    cartItems.length === 0
      ? React.createElement(
          "div",
          { style: styles.emptyCart },
          "Your cart is empty."
        )
      : React.createElement(
          React.Fragment,
          null,

          
          React.createElement(
            "div",
            { style: styles.cartList },

            cartItems.map((item) =>
              React.createElement(
                "div",
                { key: item.id, style: styles.cartItem },

                
                React.createElement("img", {
                  src: item.image,
                  alt: item.title,
                  style: styles.cartImage,
                }),

                
                React.createElement(
                  "div",
                  null,

                  React.createElement(
                    "h3",
                    { style: { margin: "0 0 8px" } },
                    item.title
                  ),

                  React.createElement(
                    "p",
                    { style: { margin: "0 0 6px", color: "#6d5a5a" } },
                    `${item.flavourName} • ${item.type}`
                  ),

                  React.createElement(
                    "div",
                    { style: styles.cartActionRow },

                    // Price
                    React.createElement(
                      "strong",
                      { style: { color: item.accent } },
                      item.price
                    ),

                    
                    React.createElement(
                      "div",
                      { style: styles.quantityControl },

                      React.createElement(
                        "button",
                        {
                          onClick: () => onDecrease(item.id),
                          style: {
                            ...styles.quantityButton,
                            backgroundColor: item.accent,
                          },
                        },
                        "-"
                      ),

                      React.createElement(
                        "span",
                        {
                          style: {
                            ...styles.quantityValue,
                            color: item.accent,
                          },
                        },
                        item.quantity
                      ),

                      React.createElement(
                        "button",
                        {
                          onClick: () =>
                            onIncrease(item, {
                              accent: item.accent,
                              name: item.flavourName,
                            }),
                          style: {
                            ...styles.quantityButton,
                            backgroundColor: item.accent,
                          },
                        },
                        "+"
                      )
                    )
                  )
                )
              )
            )
          ),

          
          React.createElement(
            "div",
            { style: styles.totalBox },

            React.createElement(
              "h3",
              null,
              `Total Amount: ₹${totalAmount}`
            ),

            React.createElement(
              "button",
              {
                style: styles.primaryButton,
                onClick: onPlaceOrder,
              },
              "Place Order"
            )
          )
        )
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      priceNumber: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
      flavourName: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartPage;