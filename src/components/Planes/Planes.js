import React from 'react'
import './planesStyle.scss'
const Planes = () => {
    const handleClick=(url)=>{
        window.open(url, '_blank', 'noopener, noreferrer')
    }
  return (
    <div className='planesContainer' id='planes'>
        <div className='planesTitle'>
            <h2 className='title'>Planes</h2>
        </div>
        <div className='planesContainerContent'>

        <div className='planesContent' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
            <div className='imageContainer'>
            <img src="./images/Icono_Plan Premium.svg" alt="Icon" />
            </div>
            <p className='planesTxt'>Es el plan ideal si querés estar preparado ante cualquier imprevisto, ya que te
ofrece cobertura completa frente a riesgos.</p>
        </div>
        <div className='planesContent'>
            <p className='separator'>...</p>
        </div>
        <div className='planesContent' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
            <div className='imageContainer'>
                <img src="./images/Icono_Plan Platinum.svg" alt="Icon" />
            </div>
            <p className='planesTxt'>Con este plan tenes la tranquilidad y seguridad de mantener bajo protección
tus cosas más valiosas.</p>
        </div>
        <div className='planesContent'>
            <p className='separator'>...</p>
        </div>
        <div className='planesContent' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
        <div className='imageContainer'>
            <img src="./images/Icono_Plan Basic.svg" alt="Icon" />
        </div>
            <p className='planesTxt'>Con este plan tenes la tranquilidad y seguridad de mantener bajo protección
tus cosas más valiosas.</p>
        </div>
        </div>
        <div className='buttonCotizar' onClick={()=>handleClick('https://wa.me/message/CYWA43GWV6TOF1')}>
            COTIZAR
        </div>
    </div>
  )
}

export default Planes