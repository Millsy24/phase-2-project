import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import './App.css'
import TrackPage from './Components/TrackPage'
import SubmitPage from './Components/SubmitPage'
import CryptidsPage from './Components/CryptidsPage'
import NavBar from './Components/NavBar'

function App() {
  useEffect(()=>{
    fetch('local')
  })
  return (
    <div className="App">
     <NavBar/>
     <TrackPage/>
     <SubmitPage/>
     <CryptidsPage/>

    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>,
  document.getElementById("root")
  );

export default App;
