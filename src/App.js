import React from 'react';
import About from './components/About/About';
import Asesoria from './components/Asesoria/Asesoria';
import CardContainer from './components/Card/CardContainer';
import CardMobile from './components/Card/CardMobile';
import Footer from './components/Footer/Footer';
import NavbarPlus from './components/Navbar/NavbarPlus';
import Planes from './components/Planes/Planes';
import Preguntas from './components/Preguntas/Preguntas';
import SliderContainer from './components/Slider/SliderContainer';
import Testimonios from './components/Testimonios/Testimonios';


function App() {
  return (
    <>
      <NavbarPlus />
      <SliderContainer />
      <CardContainer />
      <CardMobile />
      <Planes />
      <Asesoria />
      <Testimonios />
      <Preguntas />
      <About />
      <Footer />
    </>
  );
}

export default App;
