import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import bakeryData from "../data/bakeryData";
import styles from "../styles/styles";
import HeroSection from "../components/HeroSection";
import FlavourSelector from "../components/FlavourSelector";
import MenuCards from "../components/MenuCards";
import GallerySection from "../components/GallerySection";

function HomePage({ onAddToCart, onIncrease, onDecrease, getItemQuantity }) {
  const flavours = bakeryData.flavours;
  const [selectedFlavour, setSelectedFlavour] = useState(flavours[0].name);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const currentVisits = Number(localStorage.getItem("velvet_visits") || 0) + 1;
    localStorage.setItem("velvet_visits", currentVisits);
    setVisitCount(currentVisits);
  }, []);

  const activeFlavour = useMemo(
    () => flavours.find((item) => item.name === selectedFlavour) || flavours[0],
    [flavours, selectedFlavour]
  );

  return React.createElement(
    React.Fragment,
    null,

    React.createElement(HeroSection, {
      hero: bakeryData.hero,
    }),

    React.createElement(
      "section",
      { style: styles.visitBoxSection },

      React.createElement(
        "div",
        { style: styles.visitBox },

        React.createElement(
          "h3",
          { style: { marginBottom: 8 } },
          "Welcome back"
        ),

        React.createElement(
          "p",
          { style: { margin: 0 } },
          "This bakery page has been opened ",
          React.createElement("strong", null, visitCount),
          " times in this browser."
        )
      )
    ),

    React.createElement(FlavourSelector, {
      flavours: flavours,
      selectedFlavour: selectedFlavour,
      onSelectFlavour: setSelectedFlavour,
    }),

    React.createElement(MenuCards, {
      flavour: activeFlavour,
      onAddToCart: onAddToCart,
      onIncrease: onIncrease,
      onDecrease: onDecrease,
      getItemQuantity: getItemQuantity,
    }),

    React.createElement(GallerySection, {
      gallery: bakeryData.gallery,
    })
  );
}

HomePage.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  getItemQuantity: PropTypes.func.isRequired,
};

export default HomePage;