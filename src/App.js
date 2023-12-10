import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar pimiento', completed: true },
  { text: 'Cortar zanahoria', completed: false },
  { text: 'Cocinar a fuego lento', completed: false },
  { text: 'Comer', completed: false },
];

localStorage.setItem('TODOS_v1', defaultTodos);
localStorage.removeItem('TDOS_v1'); */

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_v1');
  
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_v1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  };

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_v1', JSON.stringify(newTodos));
    
    setTodos(newTodos);
  };

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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
