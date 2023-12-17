import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    total === completed ?

    <h1 className='TodoCounter'>Felicitaciones!! Completaste todas las tareas ✨</h1>
    :
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };