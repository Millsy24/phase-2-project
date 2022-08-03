import React from 'react'




const TrackCard = ({ id, user, date, body, image, location}) => {
    return(
        <div classname="card" id = {id}>
            <p>{user}</p>
            <p>{date}</p>
            <p>{body}</p>
            <p>{location}</p>
            <img src ={image} alt = "monster that tells the future" className='card-image'/>
    
        </div>
    )}
    

export default TrackCard