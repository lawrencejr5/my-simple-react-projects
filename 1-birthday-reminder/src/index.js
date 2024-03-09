import React from "react";
import ReactDOM from "react-dom/client";
//css
import "./index.css";
//components
import Birthdays from "./components/birthdays";
//data
import data from "./data/data";

const App = () => {
  const [value, setValue] = React.useState(data);
  const btn = document.querySelector(".btn");
  // Clear all function
  const clearAll = () => {
    if (value.length === 5) {
      setValue([]);
    } else if (value.length === 0) {
      setValue(data);
    }
  };
  // Button component
  const Button = () => {
    return (
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    );
  };
  // App returning
  return (
    <main>
      <section className="container">
        <h2 style={{ color: "white" }}>{value.length} Birthdays Today</h2>
        {value.map((item) => {
          const { id, fullname, img, age } = item;
          return <Birthdays key={id} img={img} name={fullname} age={age} />;
        })}
      </section>
      <Button />
    </main>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
