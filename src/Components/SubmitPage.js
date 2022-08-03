import React, { useState } from 'react'
import SubmitForm from './SubmitForm';




const SubmitPage = ({setSightings}) => {
    //states constants
    const [user, setUser] = useState('')
    const [date,setDate] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')
    //handler functions
    const handleUserChange = (event) => {
        setUser(event.target.value)
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }
    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    }


    return (
       <div>
       <h1>What you done seen?</h1>
       <p>Input the truth below...</p>
       <SubmitForm 
       //lots and lots of props
        user={user}
        date={date}
        body={body}
        image={image}
        location={location}
        handleUserChange={handleUserChange}
        handleDateChange={handleDateChange}
        handleBodyChange={handleBodyChange}
        handleImageChange={handleImageChange}
        handleLocationChange={handleLocationChange}
        setSightings={setSightings}
       />
       </div>
      );


}




export default SubmitPage