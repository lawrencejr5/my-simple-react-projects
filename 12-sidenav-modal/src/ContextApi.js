import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextApi = ({ children }) => {
  const [sideNav, setSideNav] = useState(false);
  const [modal, setModal] = useState(false);

  const openSideNav = () => {
    setSideNav(true);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeSideNav = () => {
    setSideNav(false);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        sideNav,
        modal,
        openModal,
        closeModal,
        openSideNav,
        closeSideNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
