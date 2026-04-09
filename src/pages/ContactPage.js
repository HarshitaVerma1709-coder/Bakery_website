import React, { useState } from "react";
import styles from "../styles/styles";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return React.createElement(
    "div",
    { style: styles.simplePage },

    React.createElement(
      "p",
      { style: styles.sectionTag },
      "Contact"
    ),

    React.createElement(
      "h2",
      { style: styles.sectionTitle },
      "Talk to the shopkeeper"
    ),

    React.createElement(
      "button",
      {
        style: styles.primaryButton,
        onClick: () => setShowDetails(true),
      },
      "Show Contact Details"
    ),

    showDetails &&
      React.createElement(
        "div",
        { style: styles.contactInfoCard },

        React.createElement(
          "p",
          { style: styles.contactLine },
          "📞 Shopkeeper Phone: +91 98765 43210"
        ),

        React.createElement(
          "p",
          { style: styles.contactLine },
          "✉ Mail ID: hello@velvetcrumbs.com"
        ),

        React.createElement(
          "form",
          {
            onSubmit: handleSubmit,
            style: styles.form,
          },

          React.createElement("input", {
            style: styles.input,
            type: "text",
            name: "name",
            placeholder: "Your name",
            value: formData.name,
            onChange: handleChange,
            required: true,
          }),

          React.createElement("input", {
            style: styles.input,
            type: "text",
            name: "flavor",
            placeholder: "Preferred flavour",
            value: formData.flavor,
            onChange: handleChange,
            required: true,
          }),

          React.createElement("textarea", {
            style: styles.textarea,
            name: "message",
            placeholder: "Write your comment or order details",
            value: formData.message,
            onChange: handleChange,
            required: true,
          }),

          React.createElement(
            "button",
            {
              type: "submit",
              style: styles.primaryButton,
            },
            "Send Message"
          )
        )
      ),

    submitted &&
      React.createElement(
        "div",
        { style: styles.successBox },
        `Thank you, ${formData.name}. Your message for ${formData.flavor} has been recorded.`
      )
  );
}

export default ContactPage;