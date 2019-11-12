import React, { useMemo } from 'react'
import DragSortableList from 'react-drag-sortable'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const shuffleArry = (arr) => {
  var currentIndex = arr.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

const DragAndDrop = props => {
  const drawRandomCards = (letters) => {
    shuffleArry(letters)
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

  const onSort = (sortedList, e) => {
    return null
  }

  const renderComponent = useMemo(() => {
    return (
      <div>
        <div className='row'>{drawRandomCards(props.letters)}</div>
        <hr />
        <div className='row'>
          <DragSortableList
            items={props.sortList}
            onSort={onSort}
            type='horizontal'
          />
        </div>
      </div>
    )
  }, [])

  return renderComponent
}

export default DragAndDrop
