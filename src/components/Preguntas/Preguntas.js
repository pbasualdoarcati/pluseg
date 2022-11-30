import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import './preguntasStyle.scss'
const Preguntas = () => {
  return (
    <div className='preguntasContainer'>
        <div className='preguntasImgContainer'>
            <img src="/images/Avatar_Preguntas.png" alt="" />
        </div>
        <div className='preguntasTitleContainer'>
            <h2 className='preguntasTitle' id='preguntas'>Preguntas Frecuentes</h2>
        </div>
        <Container className='preguntasClassContainer'>
            <div className='container preguntasTextContainer'>
            <Accordion flush>
            <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordionTitle'>¿Es obligatorio?</Accordion.Header>
                  <Accordion.Body className='accordionBody'>
                  Sí, es obligatorio tener seguro. El artículo 68 de la Ley de Tránsito y Seguridad Vial Nº 24.449, establece la obligatoriedad de una póliza de Responsabilidad Civil, más conocido como seguro contra terceros. Esta cobertura está incluida en todos nuestros productos de Seguro Automotor.
                  </Accordion.Body>
              </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className='accordionTitle'>¿Qué tipos de vehículos pueden asegurarse?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              Se puede asegurar una amplia variedad de vehículos: desde automóviles y pickups hasta trailers y batanes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className='accordionTitle'>¿Qué se entiende por “terceros completo”?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              La cobertura de terceros completo, además de cubrir la responsabilidad civil, contempla los daños a tu vehículo por incendio o robo total y/o parcial, además de la destrucción total por accidente.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className='accordionTitle'>¿Por qué elegir un seguro “todo riesgo”?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              Porque además de la cobertura de daños totales, cubre los daños parciales que pueda sufrir tu vehículo. Es el producto más completo, y en nuestro portfolio lo denominamos Todo Riesgo con Franquicia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className='accordionTitle'>¿Cuáles son los medios de pago?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              Los medios de pago habilitados son: débito en cuenta corriente o caja de ahorro (CBU). Tarjetas de crédito: VISA / MASTERCARD / AMEX / NARANJA Medios de pago electrónico de recaudación: Pago Fácil, Cobro exprés, Rapipago y Pago mis Cuentas.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className='accordionTitle'>¿Que hacer en caso de siniestro?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              La atención es personalizada, tendrán que comunicarse conmigo por whatsapp o correo, en el cuál tendremos que llenar un formulario.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header className='accordionTitle'>¿Como solicitar las asistencias?</Accordion.Header>
              <Accordion.Body className='accordionBody'>
              El asegurado deberá comunicarse a los siguientes números, dependiendo de la compañía de seguro: Galeno Seguros: 0800-777-5433, y deberá suministrar los datos necesarios para identificarlo como asegurado. San Cristobal Seguros: 0810 222 8887 opción 2 o whatsapp +54 11 2598-5281, también se podrá solicitar por la APP Seguros Rivadavia: Todos estos medios de contacto son exclusivos para solicitar servicios de asistencia al vehículo, al hogar y naútica. 0-800-666-6789 / +54 11 2808-0012 /tuasistencia.redsos.com.ar / SOS, espacio y la patente del vehículo al 70703 Federación Patronal Seguros: 08002220022 / 08008000022 / SMS al 70703
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
            </div>
        </Container>
</div>
  )
}

export default Preguntas