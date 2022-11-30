import React from 'react'

const TestimonioCard = ({text, author}) => {
  return (
    <div className='container testimoniosContainerCard'>
        <h3 className='titleTestimoniosCard'>"</h3>
        <p className='txtTestimoniosCard'>{text}</p>
        <p className='authorTestimoniosCard'>{author}</p>
    </div>
  )
}

export default TestimonioCard