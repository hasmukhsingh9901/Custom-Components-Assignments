import React from "react";

// **Task:**Create a Modal component using only

// .

// *   It should accept isOpen and onClose props.

// *   Show a dark background overlay when open.

// *   Add a close button inside the modal.

const Modal = ({ isOpen, onClose }) => {
  return (
    <div>
      <div
        style={{
          padding: "12px 22px",
          background: "gray",
          borderRadius: "10px",
          color: "white",
        }}
      >
        Modal
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            minWidth: "300px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              border: "none",
              background: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h2>Modal Title</h2>
          <p>Modal Content Goes Here</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
