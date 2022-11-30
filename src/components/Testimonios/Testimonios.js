import React from 'react'
import { Container } from 'react-bootstrap'
import TestimonioCard from './TestimonioCard'
import './testimoniosStyle.scss'
const Testimonios = () => {
  return (
    <div className='testimoniosContainer'>
        <div className='testimoniosImgContainer'>
            <img src="/images/Avatar_Testimonios.png" alt="" />
        </div>
        <div className='testimoniosTitleContainer'>
            <h2 className='testimoniosTitle' id='testimonios'>Testimonios</h2>
        </div>
        <Container>
        <div className='container testimoniosTextContainer'>
            <TestimonioCard 
            text={'Tenía muchas dudas acerca del seguro que quería comprar, pero fueron resueltas y finalmente me decidí.'} 
            author={'Ignacio Sanchez'}
            />
            <TestimonioCard 
            text={'El proceso fue fácil y rápido... Lo recomiendo.'} 
            author={'Sandra Morland'}
            />
            <TestimonioCard 
            text={'Me encantó el trato cercano y la asesoría al momento de contratación fue muy clara y objetiva.'} 
            author={'Maite Méndez'}
            />
        </div>
        </Container>
    </div>
  )
}

export default Testimonios