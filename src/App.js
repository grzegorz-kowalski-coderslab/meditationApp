import logo from './logo.svg';
import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Header from "./components/organisms/Header";

function App() {
  return (
      <>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
      </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
