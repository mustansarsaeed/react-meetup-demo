import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDelete() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onCancel={handleCloseModal} onConfirm={handleCloseModal} />
      )}
      {modalIsOpen && <Backdrop onClick={handleCloseModal} />}
    </div>
  );
}

export default Todo;
