import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
};

export default App;
