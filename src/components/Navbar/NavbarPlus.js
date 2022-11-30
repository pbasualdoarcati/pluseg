import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.scss'

const NavbarPlus = () => {
  return (
    <>

  <Navbar expand="lg" className='navbarplus'>

        <Navbar.Brand href="#home">
        <img src='/images/PLUSEG.png' alt='Logo Plugseg' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggleStyle'/>
        <Navbar.Collapse id="basic-navbar-nav" className="menuplus">
          <Nav className='d-flex justify-content-center text-center'>
            <Nav.Link href="#seguros">Seguros</Nav.Link>
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#asesoria">Asesorías</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#preguntas">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#about">Acerca</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
    </>
  
  )
}

export default NavbarPlus