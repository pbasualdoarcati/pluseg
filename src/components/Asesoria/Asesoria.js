import React from 'react'
import { Container } from 'react-bootstrap'
import './asesoriaStyle.scss'
const Asesoria = () => {
    const handleClick=(url)=>{
        window.open(url, '_blank', 'noopener, noreferrer')
    }
  return (
    <div className='asesoriaContainer'>
        <div className='asesoriaImgContainer'>
            <img src="/images/Avatar_Asesorias.png" alt="" />
        </div>
        <div className='asesoriaTitleContainer'>
            <h2 className='asesoriaTitle' id='asesoria'>Asesoría</h2>
        </div>
        <Container className='asesoriaClassContainer'>
        <div className='container asesoriaTextContainer'>
            <p className='asesoriaTxt'>
                <span className='asesoriaSpan'>Obtén asesoría personalizada en todas tus dudas.</span> 
            </p>
            <p className='asesoriaTxt asesoriaTxt2'>
                Escribeme y recibí la información necesaria en tu proceso de decisión y compra de tu seguro ideal.
            </p>
        </div>
        <div className='buttonContainer' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
            <img src="/images/whatsapp.svg" alt="Logo whatsapp" className='logoWsp'/>
            WHATSAPPEAME
        </div>
        </Container>
    </div>
  )
}

export default Asesoria