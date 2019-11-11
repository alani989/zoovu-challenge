import React from 'react'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const FindMeCard = props => {
  let { findMeItem } = props
  let find = <p>Find This Card</p>
  let isFound = (
    <p>No More Cards? Stay put big guy, you still gotta sort the letters</p>
  )

  return (
    <div className='find-me-div'>
      <div className='d-flex-row'>{props.allFound ? isFound : find}</div>
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
