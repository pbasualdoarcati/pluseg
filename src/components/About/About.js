import React from 'react'
import './aboutStyle.scss'
const About = () => {
  return (
    <div className='aboutContainer' id='about'>
        <div className='container titleContainer'>
            <div>
                <h3 className='firstName'>Natalia</h3>
                <h3 className='lastName'>URSIC</h3>
                <h4 className='profession'>Consultora de Seguros</h4>
                <p className='firstTxtHidden'>Desde el 2018 soy Productora Asesora de Seguros. Trabaje toda la vida en la administración de asistencia vehicular, agradecida y orgullosa a la empresa familiar de remolques en la cual me enseñaron muchos de los conocimientos empleados.</p>
            </div>
            <div className='imgContainerAbout'>
                <img src="./images/Avatar_Bio.png" alt="Avatar Bio" className='imgAbout'/>
            </div>
        </div>
            <div className='container txtContainer'>
            <p className='firstTxt'>Desde el 2018 soy Productora Asesora de Seguros. Trabaje toda la vida en la administración de asistencia vehicular, agradecida y orgullosa a la empresa familiar de remolques en la cual me enseñaron muchos de los conocimientos empleados.</p>
                <p className='secondTxt'>También trabajé por unos años en una compañía de seguros en la cual me abrió más las puertas de este mundo asegurador.</p>
                <p className='thirdTxt'>Todos los años me capacito en forma continua para estar actualizada y ofrecer al cliente la mejor respuesta. Sé que cada persona tiene sus tiempos, por eso mi manera de trabajo es siempre personalizada y me adapto a los tiempos y comunicación de cada cliente. Estoy a disposición en ayudarte para mejor y
asesorar tu póliza sin cargo.</p>
            </div>
    </div>
  )
}

export default About