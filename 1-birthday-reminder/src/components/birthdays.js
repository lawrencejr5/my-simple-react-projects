import React from "react";
const Birthdays = ({ name, img, age, no }) => {
  return (
    <article className="birthdays">
      <h1>{no}</h1>
      <img src={img} alt="" />
      <div className="content">
        <b>{name}</b>
        <span>{age}</span>
      </div>
    </article>
  );
};
export default Birthdays;
