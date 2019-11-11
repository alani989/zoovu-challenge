import React from 'react'
import ReactStopwatch from 'react-stopwatch'

const Stopwatch = (props) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({ formatted }) => {
      props.getFinalScore(formatted)
      return (
        <div>
          <h4>Score: {formatted}</h4>
        </div>
      )
    }}
  />
)

export default Stopwatch
