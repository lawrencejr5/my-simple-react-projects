import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//css
import "./index.css";
//components
import Reviews from "./components/reviews";
import Loading from "./components/loading";
//data
import data from "./data/data";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const items = data[count];
  const { id, img, name, jutsu, quote } = items;
  const checkNum = (n) => {
    if (n > data.length - 1) {
      return 0;
    } else if (n < 0) {
      return data.length - 1;
    }
    return n;
  };
  const next = () => {
    setCount((v) => {
      let nextNum = v + 1;
      return checkNum(nextNum);
    });
  };

  const prev = () => {
    setCount((v) => {
      let prevNum = v - 1;
      return checkNum(prevNum);
    });
  };
  const suprise = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber == count) {
      randomNumber += 1;
    }
    setCount(checkNum(randomNumber));
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  return (
    <main>
      <h1>Reviews Project</h1>
      <section className="content">
        {loading ? (
          <Loading />
        ) : (
          <Reviews
            key={id}
            img={img}
            name={name}
            jutsu={jutsu}
            quote={quote}
            next={next}
            prev={prev}
            suprise={suprise}
          />
        )}
      </section>
    </main>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
