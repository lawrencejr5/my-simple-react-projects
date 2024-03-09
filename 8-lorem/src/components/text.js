import React from "react";

const Text = ({ texts, count }) => {
  return (
    <div className="paragraphs">
      <h2>{count ? `No of paragraphs generated(${count})` : ""}</h2>
      {texts.map((text, index) => {
        return (
          <div className="paragraph" key={index}>
            <b>{`Paragraph ${index + 1}`}: </b>
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default Text;
