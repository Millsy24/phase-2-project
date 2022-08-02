import React from 'react'
import CryptidsCards from './CryptidsCard'




const CryptidsContainer = ({cryptids}) => {
    const CryptidsComponent = cryptids.map(cryptid => {
        return <CryptidsCards key = {cryptid.id} cryptids = {cryptid } > <img src = 'assets/images/angels1.jpg' /></CryptidsCards>
    })

    return (
        <div className = 'card container'>
            {CryptidsComponent}
        </div>
    )
    




}



export default CryptidsContainer