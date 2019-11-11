import React from 'react'
import DragSortableList from 'react-drag-sortable'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const DragAndDrop = props => {

  const drawRandomCards = letters => {
    return letters.map((letter, i) => {
      return (
        <div className='drag-box' key={`drag-box-key-${i}`}>
          <img
            className='card-img'
            id={letter.id}
            src={`${imagesPath}question.jpg`}
            onDragStart={e => drag(e)}
            alt={letter.src}
          />
        </div>
      )
    })
  }

  const drag = e => {
    e.dataTransfer.setData('text', e.target.id)
  }

  const onSort = sortedList => {
    props.getSortLetters(sortedList)
    console.log(sortedList)
    if (!props.findMeItem) {
      checkSort(sortedList)
    }
  }

  const checkSort = arr => {
    let sorted = false
    if (
      arr[0].id === 'z' &&
      arr[1].id === 'o' &&
      arr[2].id === 'o2' &&
      arr[3].id === 'v' &&
      arr[4].id === 'u'
    ) {
      sorted = true
    }

    if (sorted === true) {
      props.endGame()
    }
    return sorted
  }

  return (
    <div>
      <div className='row'>{drawRandomCards(props.letters)}</div>
      <hr />
      <div className='row'>
        <DragSortableList items={props.sortList} onSort={onSort} type='horizontal' />
      </div>
    </div>
  )
}

export default DragAndDrop
