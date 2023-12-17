import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button 
    className="CreateTodoButton"
    onClick={
      (event) => {
        setOpenModal(state => !state);
      }
    }
    >
      +
    </button>
  );
}

export { CreateTodoButton };
