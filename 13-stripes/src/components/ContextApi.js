import React, { useContext, useState } from "react";
import { createContext } from "react";
import { sublinks } from "../data/data";

export const AppContext = createContext();

export const ContextApi = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ headerLink: "", subLink: [] });

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    const link = sublinks.find((link) => {
      if (link.page == text) {
        return link;
      }
    });
    setPage({ headerLink: text, subLink: link.links });
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebar,
        submenu,
        location,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
