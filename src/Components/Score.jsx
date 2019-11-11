import React, { useMemo, useState, useEffect } from 'react'
import Stopwatch from './Stopwatch'

const Score = props => {
  let [finalScore, setFinalScore] = useState(0)

  useEffect(() => {
    if (props.solved) {
      return props.submitScore(true)
    }
  }, [props.solved])

  const getFinalScore = score => {
    setFinalScore(score)
  }

  // using useMemo hook to prevent re render for the stopwatch
  const stopwatch = useMemo(() => {
    return <Stopwatch getFinalScore={getFinalScore} />
  }, [])

  return (
    <div>
      {!props.solved ? (
        stopwatch
      ) : (
        <div>
          <h4>Score: {finalScore}</h4>
        </div>
      )}
      <h4 className='text-danger'>Penalties: {props.penalty}s</h4>
    </div>
  )
}

export default Score
