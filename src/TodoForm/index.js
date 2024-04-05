import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [error, setError] = React.useState(null); // Estado para manejar el error

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim() !== "") {
      // Verifica si el valor no está vacío
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      setError("El campo no puede estar vacío");
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setError(null); // Limpia el error al cambiar el valor del campo
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Verifica si la tecla presionada es "Enter" sin la tecla Shift
      onSubmit(event);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Agregar una tarea"
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={handleKeyDown} // Agrega el evento para detectar la tecla "Enter"
      />
      {error && <p style={{ color: "#E57373" }}>{error}</p>}{" "}
      {/* Muestra el error si existe */}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
