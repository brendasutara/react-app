import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/index.js";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return totalTodos === 0 ? (
    <h1 className="TodoCounter">Lista de tareas</h1> // Mostrar este título si no hay tareas
  ) : completedTodos === totalTodos ? (
    <h1 className="TodoCounter">
      Felicitaciones!! Completaste todas las tareas ✨
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
