import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Error from "./views/Error";
import Dashboard from "./views/Dashboard";


function App() {
  return (
    <div className="App">
      {/* <h1>Portfolio 1</h1>
      <br/> */}
      <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="*" element={<Error />}/>
      </Routes>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
