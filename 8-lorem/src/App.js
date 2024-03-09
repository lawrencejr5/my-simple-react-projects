import { paragraphs } from "./data/data";
import Lorem from "./components/lorem";
import { useState } from "react";
const App = () => {
  return (
    <div className="App">
      <h1 style={{ marginLeft: "1rem" }}>Tired of boring lorem ipsum</h1>
      <Lorem />
    </div>
  );
};

export default App;
