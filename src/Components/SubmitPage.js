import React from 'react'
import SubmitForm from './SubmitForm';




const SubmitPage = ({setSightings}) => {
       


    return (
       <div>
       <h1 className='page-header'>What you done seen?</h1>
       <p className='instructions'>Input the truth below...</p>
       <SubmitForm 
       //fewer props
       setSightings={setSightings}
       />
       </div>
      );


}




export default SubmitPage