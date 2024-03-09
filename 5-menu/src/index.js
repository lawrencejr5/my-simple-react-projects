import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import datum from "./data/data";
import Header from "./components/header";
import CatBtns from "./components/catBtns";
import MenuItems from "./components/menuItems";

const App = () => {
  const [data, setData] = useState(datum);
  const allCategories = [
    "all",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  const [categories, setCatgeories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setData(datum);
      return;
    } else {
      const filterdItems = datum.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      setData(filterdItems);
    }
  };
  return (
    <div className="container">
      <Header />
      <div className="content">
        <CatBtns mapItems={categories} filerFunc={filterItems} />
        <MenuItems mapItems={data} />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
