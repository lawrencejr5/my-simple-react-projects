import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data";
const Navbar = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const linksContainerHeight =
      linksContainerRef.current.getBoundingClientRect().height;
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = open
      ? `${linksHeight + 16}px`
      : "";
  }, [open]);
  return (
    <nav>
      <div className="nav-container">
        <div className="header">
          <span className="logo">Lawjun</span>
          <button className="bars" onClick={toggle}>
            <img src="bars.png" alt="" />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className={open ? "links-container show-nav" : "links-container"}
        >
          <ul ref={linksRef}>
            {data.map((datum) => {
              const { id, link, text } = datum;
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

export default Navbar;
