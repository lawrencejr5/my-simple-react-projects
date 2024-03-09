import React, { useContext } from "react";
import { AppContext } from "../ContextApi";
const Home = () => {
  const { openSideNav, openModal } = useContext(AppContext);
  return (
    <section className="container">
      <div className="side-nav-btn-container">
        <button className="open-side-nav" onClick={openSideNav}>
          <img src="bars.png" alt="" />
        </button>
      </div>
      <div className="modal-btn-container">
        <button className="open-modal" onClick={openModal}>
          Open
        </button>
      </div>
    </section>
  );
};

export default Home;
