import React from 'react';
import './EmptyTodos.css';
import Icon from '../assets/flecha-down-right.svg'; // Ruta relativa al archivo SVG

function EmptyTodos() {
  return (
    <div className='containerEmpty'>
      <p className='EmptyTodos'>¡Crea tu primer to do!</p>
      <img src={Icon} alt='Icon' className='Icon' />
    </div>
  );
}

export { EmptyTodos };

