import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";

// components
import Tour from "./components/tour";

import data from "./data/data";

const Index = () => {
  const [places, setPlaces] = useState(data);
  const [loading, setLoading] = useState(true);
  const url = `https://course-api.netlify.app/api/react-tours-project`;
  const notIn = (uid) => {
    const filterPlaces = places.filter((place) => {
      const { id } = place;
      if (uid !== id) {
        return place;
      }
    });
    setPlaces(filterPlaces);
  };
  const getTours = async () => {
    setLoading(true);
    try {
      const resonse = await fetch(url);
      const allTours = await resonse.json();
      if (allTours) {
        setLoading(false);
        setPlaces(allTours);
      } else {
        setLoading(false);
        setPlaces(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  if (loading) {
    return (
      <main>
        <div className="main">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }
  if (places.length === 0) {
    return (
      <main>
        <div className="main">
          <h1>No tours left</h1>
          <button
            className="refresh_btn"
            onClick={() => {
              setPlaces(data);
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="header">
        <h1>Tours</h1>
        <div className="underline"></div>
        <span>
          Check out our available touring sites brought to u by Lawjun
        </span>
      </div>
      <div className="container">
        {places.map((place) => {
          const { name, img, description, id } = place;
          return (
            <Tour
              key={id}
              name={name}
              img={img}
              info={description}
              clickFunc={() => notIn(id)}
            />
          );
        })}
      </div>
    </main>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
