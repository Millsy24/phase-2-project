import {React, useEffect, useState} from 'react'


const TrackCard = ({ id, user, date, body, image, location, rating}) => {

    const [star, setStar] = useState('🖤🖤🖤🖤🖤')
    const [likes, setLikes] = useState('0')

    useEffect (()=>{
        setLikes(rating)
        if (likes > 4){
            setStar('❤️❤️❤️❤️❤️')
        }else{
            if(likes > 3){
                setStar('❤️❤️❤️❤️🖤')
            }else{
                if(likes > 2){
                    setStar('❤️❤️❤️🖤🖤')
                }else{
                    if(likes > 1){
                        setStar('❤️❤️🖤🖤🖤')
                    }else{
                        if(likes > 0 ){
                            setStar('❤️🖤🖤🖤🖤')
                        }
                    }
                }
            }
        }
    },[likes, rating])

    
    return(
        <div id = {id}>
            <img src ={image} alt = "monster that tells the future"/>
            <p>User: {user}</p>
            <p>Date: {date}</p>
            <p>{body}</p>
            <p>location: {location}</p>
            <p>rating: {star}</p>
    
        </div>
    )}
    

export default TrackCard
