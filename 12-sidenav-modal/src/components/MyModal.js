import React from "react";
import { AppContext } from "../ContextApi";
import { useContext } from "react";

const Modal = () => {
  const { modal, closeModal } = useContext(AppContext);
  return (
    <div className={modal ? `modal-container modal-open` : `modal-container`}>
      <div className="modal">
        <button onClick={closeModal}>
          <img src="close.png" alt="" />
        </button>
        <div className="modal-content">
          <h1>Modal content goes here</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
