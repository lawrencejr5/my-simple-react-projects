import { useState } from "react";

const Accordion = (bankai) => {
  const [toggle, setToggle] = useState(false);
  const { question, answer } = bankai;
  const toggleQ = () => {
    setToggle(!toggle);
  };
  return (
    <div className="question-container">
      <div className="question">
        <h3>{question}</h3>
        <button onClick={toggleQ}>{toggle ? "Close" : "Open"}</button>
      </div>
      <div className="answer">
        <p>{toggle && answer}</p>
      </div>
    </div>
  );
};
export default Accordion;
