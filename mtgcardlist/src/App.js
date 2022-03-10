import React  from 'react';
import logo from './logo.svg';
import './App.css';
import RandomCard from './component/RandomCard';
import NavBar from './component/NavBar';
function App() {


  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <NavBar/>
      <RandomCard/>
    </div>
  );
}

export default App;
