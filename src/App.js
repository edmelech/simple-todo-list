import React from 'react';
import './App.css';



function App() {
  const [items, setItems] = useState(['Learn React', 'Play Guitar', 'Party'])
  const [newItem, setNewItem] = useState('')

  const addItem = useCallback((item) => {
    setItems(currentItems => [...currentItems, item])
  }, [setItems])

  return (
   <div className="App">
     <h1>Cyrus' Todo list</h1>
     <ul>
       {
          items.map((item, index) => 
            <li>{ item }</li>
          )   
        }

        <li>
          <input 
            type="text"
            value="{newItem}"
            onChange={(event) = setNewItem(event.target.value)} 
          />

          <button onClick={() => addItem(newItem)}>
            Add "{ newItem }"
          </button>
        </li>
     </ul>
   </div>
  );
}

export default App;
