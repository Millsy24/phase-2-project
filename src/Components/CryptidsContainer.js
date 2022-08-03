import React from 'react'
import CryptidsCards from './CryptidsCard'




const CryptidsContainer = ({cryptids}) => {
    const CryptidsComponent = cryptids.map(cryptid => {
        return <CryptidsCards key = {cryptid.id} cryptids = {cryptid } > <img src = 'img not found' alt='img not found' /></CryptidsCards>
    })

    return (
        <div className='content-large'>
            {CryptidsComponent}
        </div>
    )
    




}



export default CryptidsContainer