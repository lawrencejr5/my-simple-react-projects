import React from "react";
import { useState } from "react";
import { paragraphs } from "../data/data";
import Text from "./text";
const Lorem = () => {
  const [count, setCount] = useState("");
  const [texts, setTexts] = useState([]);
  let noOfPara = texts.length;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTexts(paragraphs.slice(0, count));
    if (count < 0) {
      setTexts(paragraphs.slice(0, 1));
    }
    if (!count) {
      let rand = Math.floor(Math.random() * paragraphs.length);
      if (rand == 0) {
        rand = 1;
      }
      setTexts(paragraphs.slice(rand - 1, rand));
    }
    if (count >= paragraphs.length) {
      setTexts(paragraphs);
    }
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} class="myForm">
          <div className="form-grp">
            {/* <label htmlFor="count">No. of Paragraphs: </label> */}
            <input
              type="number"
              name="count"
              id="count"
              value={count}
              placeholder="No. of texts"
              onChange={(e) => setCount(e.currentTarget.value)}
            />
          </div>
          <button className="submit">Genereate</button>
        </form>
      </div>
      <Text texts={texts} count={noOfPara} />
    </>
  );
};

export default Lorem;
