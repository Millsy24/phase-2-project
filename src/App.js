import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import './App.css'
import TrackPage from './Components/TrackPage'
import SubmitPage from './Components/SubmitPage'
import CryptidsPage from './Components/CryptidsPage'
import NavBar from './Components/NavBar'

function App() {
  const sightingsURL = "http://localhost:3000/sightings"
  const cryptidsURL = "http://localhost:3000/cryptid"
  
  const [cryptids, SetCryptids]=useState([])
  const [sightings, setSightings]=useState([])

  
  
  useEffect(()=>{
    fetch( sightingsURL ).then(parseJSON).then(setSightings);
    fetch( cryptidsURL ).then(parseJSON).then(SetCryptids)
  },[])

  

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
