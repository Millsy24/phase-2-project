import React from 'react'
import CryptidsContainer from './CryptidsContainer'





const CryptidsPage = ({cryptids}) => {
    return(

        <>
        <h1>Here are your Cryptids</h1>
        <CryptidsContainer cryptids = {cryptids}/>
        
        </>



    )





}




export default CryptidsPage