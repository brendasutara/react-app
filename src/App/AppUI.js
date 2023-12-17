import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { TodosError } from '../TodosError/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodoContext } from '../TodoContext/index.js';

function AppUI() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodos,
      deleteTodos,
    } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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

export { AppUI }