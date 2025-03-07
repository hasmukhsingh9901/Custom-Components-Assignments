import React from "react";
import Button from "./components/Button";

const App = () => {
  const onClick = () => {};
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
      <Button onClick={onClick} context="Button" variant={"secondary"}>
        Button
      </Button>
    </div>
  );
};

export default App;
