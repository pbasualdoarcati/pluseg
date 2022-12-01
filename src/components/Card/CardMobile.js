import React from 'react'
import { Carousel } from 'react-bootstrap'
import Card from './Card'
import data from './data.json'
import './cardMobileStyle.scss'

const CardMobile = () => {
  return (
    <div className='container containerSegurosMobile'>
    <Carousel className='sliderMobile' indicators={false} controls={false}>
    {data.map((item, index) =>{
        return(
            <Carousel.Item className='sliderDesktopItemMobile' key={index}>
                <Card data={item}/>
                </Carousel.Item>
            )})
        } 
    </Carousel>
        </div>
  )
}

export default CardMobile