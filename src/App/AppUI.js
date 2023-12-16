import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
}) {
    return (
        <>
          <TodoCounter 
          completed={completedTodos} total={totalTodos} 
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Desperate, hubo un error!!</p>}
            {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}

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