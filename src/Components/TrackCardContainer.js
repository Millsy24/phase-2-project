import React from 'react'
import TrackCard from './TrackCard'





const TrackCardContainer = ({sightings}) => {
const card = sightings.map((obj)=>{
    return (
        <div className='content-large'>
            <TrackCard
                key = {obj.id} 
                user = {obj.user} 
                date = {obj.date}
                body = {obj.body}
                image = {obj.image}
                location = {obj.location}
                rating = {obj.rating}
            />
         </div>
    )
})

return (
    <div key={Math.random()*666} className ="card container">
        {card}
    </div>
)


}



export default TrackCardContainer