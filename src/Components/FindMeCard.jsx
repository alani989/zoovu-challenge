import React from 'react'

const FindMeCard = () => {
  return (
    <div className='flip-card'>
        <div className='flip-card-front'>
          <img
            src={require('../Assets/question.jpg')}
            alt='Avatar'
            style={{ width: '300px', height: '300px' }}
          />
        </div>
    </div>
  )
}

export default FindMeCard
