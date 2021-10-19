import React from 'react';
import './App.css';



function App() {
  const [items, setItems] = useState(['Learn React, Play Guitar, Party'])

  return (
   <div className="App">
     <h1>Cyrus' Todo list</h1>
     <ul>
       {
        items.map((item, index) => 
          <li>{ item }</li>
        )   
      }
     </ul>
   </div>
  );
}

export default App;
