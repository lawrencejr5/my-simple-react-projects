import React from "react";
import { useGlobalContext } from "./ContextApi";
import { sublinks } from "../data/data";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={
        sidebar ? `sidebar-container` : `sidebar-container sidebar-closed`
      }
    >
      <div className="sidebar">
        <img className="close" src="Close.png" alt="" onClick={closeSidebar} />
        <div className="links-container">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4 className="head-link">{page}</h4>
                <div className="sub-links">
                  {links.map((link, index) => {
                    const { label, url } = link;
                    return (
                      <a key={index} href={url}>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
