import React from "react";
import ReactDom from "react-dom";

//Styles
import "./Modal.css";

//Components
import { ModalLeft } from "./ModalLeft";
import { ModalRight } from "./ModalRight";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ open }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ModalOverlay>
        <div />
      </ModalOverlay>
      <section className="container">
        <ModalLeft />
        <ModalRight />
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
