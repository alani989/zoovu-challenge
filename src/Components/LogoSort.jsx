import React from 'react'

function LogoSort() {
    const allowDrop = (event) => {
        event.preventDefault()
  }

  const drag = (event) => {
    event.dataTransfer.setData('text', event.target.id)
  }

  const drop = (event) => {
    event.preventDefault()
    var data = event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(data))
  }

  return (
    <div>
      <div id='droping-div' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}></div>
      <br />
      <img
        id='drag1'
        src={require('../Assets/question.jpg')}
        draggable
        onDragStart={e => drag(e)}
        width='300'
        height='300'
        alt=''
      />
    </div>
  )
}

export default LogoSort
