import React from 'react'



const CryptidsCards = ({cryptids}) => {
    return(

        <div className= 'card'>
            
            <h2 className ='card header'>{cryptids.name}</h2>
            <img className = 'card image' src = {cryptids.image}/>
            <p className = 'card body'>{cryptids.content}</p>




        </div>
        
        
        

    )





}



export default CryptidsCards