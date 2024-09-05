import React from 'react'
// import { useParams } from 'react-router-dom'

const  Coin= ({value , symbol , imgSrc , name}) => {
//  const param =     useParams()
  return (
    <div className='coin'>
      <img src={imgSrc} alt={name}/>
      <h1>{symbol}</h1>
      <p>{value}</p>
    </div>
  )
}

export default Coin