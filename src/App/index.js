import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../Components/TodoList/index.js";
import { TodoItem } from "../Components/TodoItem/index.js";
import { TodosLoading } from "../TodosLoading/index.js";
import { TodosError } from "../TodosError/index.js";
import { EmptyTodos } from "../EmptyTodos/index.js";
import { CreateTodoButton } from "../Components/CreateTodoButton/index.js";
import { Modal } from "../Components/Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { TodoHeader } from "../TodoHeader/index.js";
import { EmptySearchResults } from "../EmptySearchResults/index.js";
import { ChangeAlert } from "../ChangeAlert/index.js";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    searchText,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        //propiedades
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchText}
        // render props
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptySearchResults />}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodos(todo.text)}
        //     onDelete={() => deleteTodos(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export default App;
