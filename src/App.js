import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./styles/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item, flavour) => {
    const priceNumber = Number(item.price.replace(/[^0-9]/g, ""));

    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          priceNumber,
          accent: flavour.accent,
          flavourName: flavour.name,
          quantity: 1,
        },
      ];
    });
  };

  const handleDecrease = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getItemQuantity = (itemId) => {
    const foundItem = cartItems.find((item) => item.id === itemId);
    return foundItem ? foundItem.quantity : 0;
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    window.alert("Order placed successfully!");
    setCartItems([]);
  };

  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { style: styles.page },
      React.createElement(Navbar, { cartCount: totalCartCount }),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(HomePage, {
            onAddToCart: handleAddToCart,
            onIncrease: handleAddToCart,
            onDecrease: handleDecrease,
            getItemQuantity: getItemQuantity,
          }),
        }),
        React.createElement(Route, {
          path: "/menu",
          element: React.createElement(MenuPage, {
            onAddToCart: handleAddToCart,
            onIncrease: handleAddToCart,
            onDecrease: handleDecrease,
            getItemQuantity: getItemQuantity,
          }),
        }),
        React.createElement(Route, {
          path: "/about",
          element: React.createElement(AboutPage),
        }),
        React.createElement(Route, {
          path: "/contact",
          element: React.createElement(ContactPage),
        }),
        React.createElement(Route, {
          path: "/cart",
          element: React.createElement(CartPage, {
            cartItems: cartItems,
            onPlaceOrder: handlePlaceOrder,
            onIncrease: handleAddToCart,
            onDecrease: handleDecrease,
          }),
        })
      ),
      React.createElement(Footer)
    )
  );
}