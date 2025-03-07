import React from "react";

// Create a Button component that mimics a button's functionality but only uses <div>.

// It should accept onClick, children, and variant (primary, secondary) as props.
// Apply different styles for different variants.
// Add a hover effect using CSS.

const Button = ({ onClick, children, variant = "primary" }) => {
  const styles = {
    primary: {
      background: "blue",
      color: "white",
    },
    secondary: {
      background: "gray",
      color: "white",
    },
  };
  return (
    <div
      onClick={onClick}
      style={{
        maxWidth: "140px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "12px 22px",
          background: "gray",
          borderRadius: "10px",
          color: "white",
          ...styles[variant],
        }}
        onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Button;
