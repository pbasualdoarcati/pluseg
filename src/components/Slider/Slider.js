import React from 'react'
import { Carousel } from 'react-bootstrap'
import './sliderStyle.scss'
const Slider = () => {
  return (
    <>
    <Carousel className='sliderContainer' indicators={false} controls={false}>
      <Carousel.Item className='sliderItem'>
          <h3 className='sliderTitle'>Encontrá el seguro adecuado para vos</h3>
          <p className='sliderText'>Recibe asesoría y acompañamiento en la búsqueda de tu seguro</p>
      </Carousel.Item>
      <Carousel.Item className='sliderItem'>
          <h3 className='sliderTitle'>Contratá tu seguro en pocos pasos</h3>
          <p className='sliderText'>Ahorra tiempo y dinero.</p>
      </Carousel.Item>
      <Carousel.Item className='sliderItem'>
          <h3 className='sliderTitle'>Te ayudamos a entender y gestionar tu seguro</h3>
          <p className='sliderText'>
          Nos enfocamos en ofrecerte la mejor atención brindando soluciones inmediatas.
          </p>
      </Carousel.Item>
    </Carousel>
    <Carousel className='sliderDesktop' indicators={false} controls={false}>
      <Carousel.Item className='sliderDesktopItem'>
        <img
          className="d-block w-100 sliderImgDesktop"
          src="./images/Home.jpg"
          alt="Home"
        />
        <Carousel.Caption className='sliderItemDesktop'>
          <h3 className='sliderTitle'>Encontrá el seguro adecuado para vos</h3>
          <p className='sliderText1'>Recibe asesoría y acompañamiento en la búsqueda de tu seguro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderDesktopItem'>
      <img
          className="d-block w-100 sliderImgDesktop"
          src="./images/Home2.jpg"
          alt="Home"
        />

        <Carousel.Caption className='sliderItemDesktop'>
        <h3 className='sliderTitle'>Contratá tu seguro en pocos pasos</h3>
          <p className='sliderText2'>Ahorra tiempo y dinero.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderDesktopItem'>
      <img
          className="d-block w-100 sliderImgDesktop"
          src="./images/Home3.jpg"
          alt="Home"
        />
        <Carousel.Caption className='sliderItemDesktop'>
        <h3 className='sliderTitle'>Te ayudamos a entender y gestionar tu seguro</h3>
          <p className='sliderText3'>
          Nos enfocamos en ofrecerte la mejor atención brindando soluciones inmediatas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider