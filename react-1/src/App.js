import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import TaskList from './component/TaskList';
// const myObject ={
//   name : 'adrien'
// };

// const newObject = {
//   name: "nico",

//   ...myObject,
//   age: 65,
// };
// console.log(myObject);

// console.log(newObject);
// const myArray = [1,2];
// const [a, b , c] = myArray;

// console.log("valeur a :", a)
// console.log("valeur b :", b)
// console.log("valeur c :", c)




function App() {
  const myTaskList = [
    {
      title: "menage",
      time: 90,
      complexity: 4,
      room: "cuisine",
    },
    {
      title: "rangement",
      time: 20,
      complexity: 3,
      room: "chambre",
    },
    {
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
        <Button monPremierProps={'salsifie'} ></Button>
        <TaskList list={myTaskList} />
      </header>
    </div>
  );
}

export default App;
