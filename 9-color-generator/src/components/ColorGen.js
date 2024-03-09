import React, { createContext, useContext, useEffect, useState } from "react";
import Values from "values.js";
const ColorGen = () => {
  const [colors, setColors] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    let defval = "#1877f2";
    let defaultColor = new Values(defval).all(10);
    setColors(defaultColor);
  }, []);

  setTimeout(() => {
    setError(false);
  }, 2000);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let myColors = new Values(value).all(10);
      setColors(myColors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="colorVal"
            placeholder="#1877f2"
            value={value}
            style={{ border: error ? "2px solid red" : "" }}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            style={{
              backgroundColor: value ? value : "#1877f2",
            }}
          >
            Generate
          </button>
        </form>
      </div>
      <ColorDisplay colors={colors} />
    </>
  );
};

const ColorDisplay = ({ colors }) => {
  return (
    <div
      className="colorContainer"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      {colors.map(({ rgb, hex, weight }, index) => {
        const bcg = rgb.join(",");
        const copy = (e) => {
          const targBox = e.target;
          targBox.classList.toggle("copied");
          setTimeout(() => {
            targBox.classList.toggle("copied");
          }, 1000);
          navigator.clipboard.writeText(`#${hex}`);
        };
        return (
          <div
            key={index}
            className="box copied"
            onClick={copy}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: `rgb(${bcg})`,
              textAlign: "center",
              color: index < 10 ? "black" : "white",
            }}
          >
            <p>{weight}%</p>
            <span>{`#${hex}`}</span>
            <br />
            <span className="copyText">Copied to clipboard!</span>
          </div>
        );
      })}
    </div>
  );
};

export default ColorGen;
