import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/styles";

function GallerySection({ gallery }) {
  return React.createElement(
    "section",
    { style: styles.section },

    
    React.createElement(
      "p",
      { style: styles.sectionTag },
      "Gallery"
    ),

    
    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "Bakery moments"
    ),

    
    React.createElement(
      "div",
      { style: styles.galleryGrid },

      gallery.map((photo) =>
        React.createElement(
          "div",
          {
            key: photo.id,
            style: styles.galleryCard,
          },

          
          React.createElement("img", {
            src: photo.image,
            alt: photo.title,
            style: styles.galleryImage,
          }),

          
          React.createElement(
            "div",
            { style: styles.galleryOverlay },
            photo.title
          )
        )
      )
    )
  );
}

GallerySection.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GallerySection;