import React from "react";
import { useGlobalContext } from "./ContextApi";
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const submenuFunc = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const top = tempBtn.bottom + 3;
    openSubmenu(page, { center, top });
  };
  // const handleSubmenu = (e) => {
  //   if (!e.target.classList.contains("linkBtn")) {
  //     closeSubmenu();
  //   }
  // };

  return (
    <nav>
      <div className="header">
        <span className="logo">Lawjun</span>
        <button className="bars" onClick={openSidebar}>
          <img src="bars.png" alt="" />
        </button>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <button className="linkBtn" onMouseEnter={submenuFunc}>
              products
            </button>
          </li>
          <li>
            <button className="linkBtn" onMouseEnter={submenuFunc}>
              developers
            </button>
          </li>
          <li>
            <button className="linkBtn" onMouseEnter={submenuFunc}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
