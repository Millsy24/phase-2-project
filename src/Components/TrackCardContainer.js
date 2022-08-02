import React from 'react'
import TrackCard from './TrackCard'





const TrackCardContainer = ({sightings}) => {
const card = sightings.map((obj)=>{
    return (
        <TrackCard
         key = {obj.id} 
         user = {obj.user} 
         date = {obj.date}
         body = {obj.body}
         image = {obj.image}
         location = {obj.location}
         />
    )
})

return (
    <div className ="card container">
        {card}
    </div>
)


}



export default TrackCardContainer