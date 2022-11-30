import React from 'react'
import Card from './Card'
import data from './data.json'
const CardContainer = () => {


  return (
    <>
    <div className='container containerSeguros' id='seguros'>
        <div className='cardComponentContainer'>
            <h2 className='fs-1 fw-bold'>Seguros</h2>
        </div>
        <div className='cardComponentCard'>
            {data.map((item, index) =>{
                return(
                    <div key={index}>
                    <Card data={item}/>
                    </div>
                )}
                )}
        </div>
    </div>
    </>
  )
}

export default CardContainer