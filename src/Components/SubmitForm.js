import {React, useState} from "react";
import { useHistory } from "react-router-dom";

const SubmitForm = ({
    setSightings
}) => {
  //state and setters 
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

  const resetDefault= ()=>{
    setUser("")
    setDate("")
    setBody("")
    setLocation("")
    setImage("")
  }


    const handleSubmitForm=(e)=>{ 
        e.preventDefault()
        fetch("http://localhost:3000/sightings",{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
                            user: user,
                            date: date,
                            body: body,
                            image: image,
                            location: location,
                            rating: 1
                         })
}
  )
  .then(response => response.json())
  .then(data => setSightings(sightings => [data, ...sightings]))
  .then( resetDefault() )
  .then (history.push("/"))
  
}
  let history = useHistory()
    return(
        <form onSubmit={handleSubmitForm} className="form">
        <input onChange={handleUserChange} type="text" value={user} placeholder={'input username'} />
        <br/>
        <input onChange={handleDateChange} type="text" value={date} placeholder={'input date'} />
        <br/>
        <textarea onChange={handleBodyChange} type="text" value={body} placeholder={'input your story'} />
        <br/>
        <input onChange={handleImageChange} type="text" value={image} placeholder={'input image url'} />
        <br/>
        <input onChange={handleLocationChange} type="text" value={location} placeholder={'input location'} />
        <button type="submit">Submit</button>
      </form>
    )
}

export default SubmitForm;