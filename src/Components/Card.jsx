import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact'

const Card = () => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            src={require('../Assets/question.jpg')}
            alt='Avatar'
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className='flip-card-back'>
          <h1>John Doe</h1>
          <p>Architect Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  )
}

export default Card
