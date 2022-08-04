import React from 'react'
import TrackCardContainer from "./TrackCardContainer"




const TrackPage = ({sightings}) => {
return (
    <>
    <header className='page-header'><h2>Tragic Psychic Prophecies Tracker ™</h2>
    <br/>
    <p className='intro-para'>Welcome to the Tragic Psychic Prophecy Tracker project. Have you ever been just hanging out in the sticks somewhere, minding your own business, and then some trippy phase-beast from another dimension shows up and burdens you with chilling knowledge of future events? Can you relate to that? Have you experienced mysterious phenomena, and then you looked it up on Alta Vista, but you couldn’t find any real explanation? What’s that about? Our elite investigative team spent nearly dozens of moments wracking our brains for a way to make it all make sense, and now we present you with our Tragic Psychic Prophecy Tracker, a feat of intellectual rigor comparable to The Da Vinci Code in both reasonability and scope. Now we shall bring the pieces of this puzzle together. Will this finally reveal the God Head’s machinations? Can we finally stitch some sense together from the intersections of lay-lines and time-wells? What’s that weirdo who write’s the weird stuff on Dr. Bronner’s castile soap up to? What’s their deal? And why does Bigfoots drink so much cola, that doesn’t make much sense. How come the radio doesn’t play Thin Lizzy as much anymore after Americans went to the Mir Space Station, can you explain that? Anyhoo if that has happened to you, please go to the submit page and provide as much details as you can. If you didn’t take a picture and scan it, you can draw one in paint and host it on your geoCities, that should work. I expect we will solve these mysteries by June, 2000.</p>
    </header>
    <div className='body'>
        <TrackCardContainer sightings = {sightings}/>
    </div>
    </>
) 
}



export default TrackPage