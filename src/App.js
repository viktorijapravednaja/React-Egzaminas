import "./App.css";
import { useState } from "react";

//Components
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <Modal open={openModal}></Modal>
    </div>
  );
}

export default App;
