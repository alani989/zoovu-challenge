import React, { useState, Fragment } from 'react'
import Score from './Score'
import MainContainer from './MainContainer'
import EndGame from './EndGame'

const Layout = () => {
  let [penalty, setPenalty] = useState(0)
  let [solved, setSolved] = useState(false)
  let [scoreSubmitted, setScoreSubmitted] = useState(false)

  const penalize = () => {
    setPenalty((penalty += 10))
  }

  const endGame = () => {
    setSolved(true)
  }

  const submitScore = () => {
    setScoreSubmitted(true)
  }

  return (
    <div className='p-5'>
      <div className='container'>
        <Score penalty={penalty} solved={solved} submitScore={submitScore}/>
      </div>
      {!scoreSubmitted ? (
        <Fragment>
          <div className='row'>
            <MainContainer penalize={penalize} endGame={endGame} />
          </div>
        </Fragment>
      ) : (
        <EndGame />
      )}
    </div>
  )
}

export default Layout
