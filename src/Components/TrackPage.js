import React from 'react'
import TrackCardContainer from "./TrackCardContainer"




const TrackPage = ({sightings}) => {
return (
    <>
    <header className='page-header'><h2>Prophecies</h2></header>
    <div className='body'>
        <TrackCardContainer sightings = {sightings}/>
    </div>
    </>
) 
}



export default TrackPage