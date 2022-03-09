import './App.css';
import Button from './component/Button';
import TaskList from './component/TaskList';
//import { StateProvider } from './context/store';
import React from 'react';
import { Link } from 'react-router-dom';




function App() {
  const myTaskList = [
    {
      id: 1,
      title: "menage",
      time: 90,
      complexity: 4,
      room: "cuisine",
    },
    {
      id: 2,
      title: "rangement",
      time: 20,
      complexity: 3,
      room: "chambre",
    },
    {
      id: 3,
      title: "Réparation velo",
      time: 120,
      complexity: 7,
      room: "garage",
    }
  ]
  //tableau d'objet liste de tache

  return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/invoices">hello</Link>
          </nav>
          <Button monPremierProps={'salsifie'} ></Button>
          <TaskList list={myTaskList}/>
        </header>
      </div>
  );
}

export default App;
