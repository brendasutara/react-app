import React from "react";
import { AppUI } from './AppUI.js';
import { useLocalStorage } from './useLocalStorage.js';

/* localStorage.removeItem( itemName);
  const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar pimiento', completed: true },
  { text: 'Cortar zanahoria', completed: false },
  { text: 'Cocinar a fuego lento', completed: false },
  { text: 'Comer', completed: false },
];

localStorage.setItem( itemName, JSON.stringify(defaultTodos)); */

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_v1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex (
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex (
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
  )
}

export default App;
