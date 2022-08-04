import React, { useEffect, useState } from 'react'
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import './App.css'
import TrackPage from './Components/TrackPage'
import SubmitPage from './Components/SubmitPage'
import CryptidsPage from './Components/CryptidsPage'
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'
import FooterAdd from './Components/BannerAddFoot'

function App() {
  const sightingsURL = "http://localhost:3000/sightings"
  const cryptidsURL = "http://localhost:3000/cryptid"
  const parseJSON = r => r.json()
  


  const [cryptids, SetCryptids]=useState([])
  const [sightings, setSightings]=useState([])

  
  
  useEffect(()=>{
    fetch( sightingsURL ).then(parseJSON).then(setSightings);
    fetch( cryptidsURL ).then(parseJSON).then(SetCryptids)
  },[])

  return (
    
    <div className="App">
      

      <NavBar/>
        <Switch>
      
          <Route exact path='/'>
            <TrackPage sightings = {sightings}/>
            <FooterAdd/>
          </Route>
      
          <Route path='/submitpage'>
            <SubmitPage setSightings ={setSightings}/>
            <FooterAdd/>
          </Route>


          <Route path='/cryptids'>
            <CryptidsPage cryptids = {cryptids}/>
            <FooterAdd/>
          </Route>
     
      
        </Switch>
     

    </div>
   
    
  );
}

 
export default App;
