import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

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
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
