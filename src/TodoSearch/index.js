import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      placeholder="Buscar una tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
