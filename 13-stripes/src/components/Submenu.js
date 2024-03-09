import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./ContextApi";
const Submenu = () => {
  const { submenu, location, page } = useGlobalContext();
  const subMenuRef = useRef(null);
  const { center, top } = location;
  const { headerLink, subLink } = page;

  useEffect(() => {
    subMenuRef.current.style.top = `${top}px`;
    subMenuRef.current.style.left = `${center}px`;
  }, [location]);
  return (
    <aside
      className={submenu ? "sub-menu sub-menu-open" : "sub-menu"}
      ref={subMenuRef}
    >
      <span>{headerLink}</span>
      <div className="sublink-items">
        <ul>
          {subLink.map((link, index) => {
            const { label, url } = link;
            return (
              <li key={index}>
                <a href={url}>{label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Submenu;
