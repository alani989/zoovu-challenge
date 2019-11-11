import React, { useEffect } from 'react'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const EndGame = () => {
  // restart game after 10 seconds
  const restartGame = () => {
      return window.location.reload()
  }
  useEffect(() => {
    setInterval(restartGame, 10000)
  }, [])
  return (
    <div className='container'>
      <h1>Congrats !!!!</h1>
      <p>You were successfull in your logo puzzle, game will restart in 10 seconds</p>
      <img className='zoovu-logo' src={`${imagesPath}zoovu-logo.png`} alt='' />
    </div>
  )
}

export default EndGame
