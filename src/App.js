import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import TrackPage from './Components/TrackPage'
import SubmitPage from './Components/SubmitPage'
import CryptidsPage from './Components/CryptidsPage'
import NavBar from './Components/NavBar'
import {Switch, Route, NavLink} from 'react-router-dom'

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
          </Route>
      
          <Route path='/submitpage'>
            <SubmitPage setSightings ={setSightings}/>
          </Route>


          <Route path='/cryptids'>
            <CryptidsPage cryptids = {cryptids}/>
          </Route>
     
      
        </Switch>
 
     

    </div>
   
    
  );
}

  // <BrowserRouter>
  //   <NavBar/>
  //     <Switch>
      
  //       <Route exact path='/'>
  //         <TrackPage/>
  //       </Route>
      
  //       <Route path='/submitpage'>
  //         <SubmitPage/>
  //       </Route>


  //       <Route path='/cryptids'>
  //         <CryptidsPage/>
  //       </Route>
     
      
  //     </Switch>
  // </BrowserRouter>,
  
 
export default App;
