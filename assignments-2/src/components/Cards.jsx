import React from "react";
// Task:
// Create a Card component using only <div>.

// It should accept title, content, and footerText as props.
// Display the title at the top, content in the middle, and footer text at the bottom.
// Apply a shadow and rounded corners using CSS.

const Cards = ({ title, content, footerText }) => {
  return (
    <div
    style={{
      width: "250px",
      background: "#f8f9fa",
      padding: "1rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
      {title}
    </div>
    <div style={{ marginBottom: "1rem", color: "#333" }}>{content}</div>
    <div style={{ fontSize: "0.9rem", color: "#555" }}>{footerText}</div>
  </div>
  );
};

export default Cards;
