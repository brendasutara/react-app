import React from "react";
import "./EmptySearchResults.css";
import IconResult from "../assets/hand-thumb-down.svg"; // Ruta relativa al archivo SVG

function EmptySearchResults() {
  return (
    <div className="containerEmpty">
      <p className="EmptyTodos">
        Lo siento, no encontramos resultados para tu busqueda
      </p>
      <img src={IconResult} alt="Icon" className="Icon" />
    </div>
  );
}

export { EmptySearchResults };
