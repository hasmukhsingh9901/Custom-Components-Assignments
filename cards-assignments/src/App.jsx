import React from "react";
import Cards from "./components/Cards";

const App = () => {
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
      <Cards title={"Cards"} content={"lorenn"} footerText={"Dime"} />
    </div>
  );
};

export default App;
