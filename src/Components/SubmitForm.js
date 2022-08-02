import React from "react";

const SubmitForm = ({
    user, 
    date, 
    body, 
    image, 
    location,
    handleUserChange,
    handleDateChange,
    handleBodyChange,
    handleImageChange,
    handleLocationChange
}) => {

    return(
        <form>
        <input onChange={handleUserChange} type="text" value={user} placeholder={'input username'} />
        <input onChange={handleDateChange} type="text" value={date} placeholder={'input date'} />
        <input onChange={handleBodyChange} type="text" value={body} placeholder={'input your story'} />
        <input onChange={handleImageChange} type="text" value={image} placeholder={'input image url'} />
        <input onChange={handleLocationChange} type="text" value={location} placeholder={'input location'} />
        <button type="submit">Submit</button>
      </form>
    )
}

export default SubmitForm;