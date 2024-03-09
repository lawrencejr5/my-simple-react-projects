import React from "react";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import Modal from "./components/MyModal";
import { AppContext, ContextApi } from "./ContextApi";

const App = () => {
  return (
    <ContextApi>
      <main>
        <Home />
        <SideNav />
        <Modal />
      </main>
    </ContextApi>
  );
};

export default App;
