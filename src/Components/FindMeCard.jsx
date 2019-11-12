import React from 'react'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const FindMeCard = props => {
  let { findMeItem } = props
  return (
    <div className='find-me-div'>
      <div className='row d-flex justify-content-center'>
        <p>{!props.allFound ? 'Find This Letter' : 'All Found, please sort'}</p>
      </div>
      <div className='d-flex justify-content-center'>
        {!props.allFound && findMeItem ? (
          <img
            className='card-img'
            src={`${imagesPath}${findMeItem.src}`}
            alt=''
          />
        ) : (
          <img className='card-img' src={`${imagesPath}check.png`} alt='' />
        )}
      </div>
    </div>
  )
}

export default FindMeCard
