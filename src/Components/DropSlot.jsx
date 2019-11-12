import React from 'react'

const DropSlot = props => {
  return (
    <div
      id={props.id}
      className='drop-box'
      onDragOver={e => props.allowDrop(e)}
      onDrop={e => props.drop(e)}
    ></div>
  )
}

export default DropSlot
