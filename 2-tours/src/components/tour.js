import React, { useState } from "react";
const Tour = ({ name, img, info, clickFunc }) => {
  const [more, setMore] = useState(false);
  return (
    <article className="card">
      <img src={img} alt="" />
      <b>{name}</b>
      <span>{more ? info : `${info.substring(0, 100)}......`}</span>
      <span className="see" onClick={() => setMore(!more)}>
        {more ? "See Less" : "Read More"}
      </span>
      <button className="btn" onClick={clickFunc}>
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
