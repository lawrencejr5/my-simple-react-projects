import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";

// data
import { data } from "./data/data";
// components
import Accordion from "./components/accordion";
import Header from "./components/header";
import Lhside from "./components/lhside";

const App = () => {
  return (
    <main>
      <Header />
      <section className="container">
        <Lhside />
        <div className="questions-container">
          {data.map((datum) => {
            const { id, question, answer } = datum;
            return <Accordion key={id} question={question} answer={answer} />;
          })}
        </div>
      </section>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
