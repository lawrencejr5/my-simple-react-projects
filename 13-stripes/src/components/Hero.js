import React from "react";
import { useGlobalContext } from "./ContextApi";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero-container" onMouseOver={closeSubmenu}>
      <div className="hero-content">
        <div className="hero-center">
          <h2 className="header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="hero-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            suscipit quibusdam commodi nihil officiis cum magnam facere earum
            quia aperiam. A ut libero vel repellendus aliquid, mollitia magni
            dicta quam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime, perspiciatis! Voluptas nobis odit ipsa veniam explicabo
            molestias, fuga aliquid eos error, incidunt asperiores ea
            voluptatibus voluptates aperiam libero suscipit hic?
          </p>
          <button className="hero-btn">Get Started...</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="konoha628.jpg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
