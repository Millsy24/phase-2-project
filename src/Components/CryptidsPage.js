import React from 'react'
import CryptidsContainer from './CryptidsContainer'





const CryptidsPage = ({cryptids}) => {
    return(

        <>
        <h1 className='page-header'>All Cryptids Currently Known to Science</h1>
        <CryptidsContainer cryptids = {cryptids}/>
        
        </>



    )





}




export default CryptidsPage