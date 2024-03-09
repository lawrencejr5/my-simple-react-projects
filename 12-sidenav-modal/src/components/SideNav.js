import React from "react";
import { data } from "../data/data";
import { AppContext } from "../ContextApi";
import { useContext } from "react";

const SideNav = () => {
  const { sideNav, closeSideNav } = useContext(AppContext);
  return (
    <nav
      className={
        sideNav ? `side-nav-container side-nav-open ` : `side-nav-container`
      }
      onClick={closeSideNav}
    >
      <div className="side-nav">
        <div className="logo">
          <span>Lawjun</span>
          <button onClick={closeSideNav}>
            <img src="close.png" alt="" />
          </button>
        </div>
        <div className="links-container">
          <ul>
            {data.map((datum) => {
              const { id, text, link } = datum;
              return (
                <li key={id}>
                  <a href={link}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
