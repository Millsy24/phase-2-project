import React from 'react'
import TrackCardContainer from "./TrackCardContainer"




const TrackPage = ({sightings}) => {
return (
    <>
    <h2>Prophecies</h2>
    <TrackCardContainer sightings = {sightings}/>
    </>
) 
}



export default TrackPage