import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
      setTimeout (() => {
        try {
          const localStorageItem = localStorage.getItem( itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem( itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem( itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };

  /* localStorage.removeItem( itemName);
  const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar pimiento', completed: true },
  { text: 'Cortar zanahoria', completed: false },
  { text: 'Cocinar a fuego lento', completed: false },
  { text: 'Comer', completed: false },
];

localStorage.setItem( itemName, JSON.stringify(defaultTodos)); */