import React from 'react'
import './cardStyle.scss'

const Card = (data) => {
  const handleClick=(url)=>{
    window.open(url, '_blank', 'noopener, noreferrer')
}
  return (
    <div className='cardContainer' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
      <div>
        <div className='imgContainer'>
        <img src={data.data.src} alt='Imagen' className='cardImg'/>
        <img src={data.data.icon} alt='Icon' className='cardTitle' />
        <p className='cardText'>{data.data.txt}</p>
        </div>
      </div>
    </div>
  )
}

export default Card