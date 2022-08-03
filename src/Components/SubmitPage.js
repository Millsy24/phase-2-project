import React from 'react'
import SubmitForm from './SubmitForm';




const SubmitPage = ({setSightings}) => {
    //states constants
    
    //handler functions
    


    return (
       <div>
       <h1>What you done seen?</h1>
       <p>Input the truth below...</p>
       <SubmitForm 
       //fewer props
       setSightings={setSightings}
       />
       </div>
      );


}




export default SubmitPage