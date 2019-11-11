import React, { useState, useEffect } from 'react'
import FindMeCard from './FindMeCard'
import DragAndDrop from './DragAndDrop'
import DropSlot from './DropSlot'

const imagesPath = process.env.PUBLIC_URL + '/assets/'

const letters = [
  { id: 'z', src: 'z.png' },
  { id: 'o', src: 'o.png' },
  { id: 'o2', src: 'o2.png' },
  { id: 'v', src: 'v.png' },
  { id: 'u', src: 'u.png' },
]

const MainContainer = props => {
  const [findMeItem, setFindMeItem] = useState(null)
  const [allFound, setAllFound] = useState(false)
  let [sortList, setSortList] = useState([])
  let [pickedCard, setPickedCard] = useState(null)

  useEffect(() => {
    getFirstFindItem()
    createList()
  }, [])

  const createList = () => {
    let slots = []
    letters.map((letter, i) => {
      slots.push({
        content: (
          <DropSlot
            id={letter.id}
            key={`dropSlotKey-${i}`}
            allowDrop={allowDrop}
            drop={drop}
          />
        ),
      })
      return null
    })
    setSortList(slots)
  }

  const getSortLetters = list => [setSortList(list)]

  const allowDrop = e => {
    e.preventDefault()
  }

  const drop = e => {
    e.preventDefault()
    var data = e.dataTransfer.getData('text')
    let droppedImg = document.getElementById(data)
    let droppedSlot = e.target
    // reveal card when dropped
    droppedImg.setAttribute('src', imagesPath + droppedImg.alt)
    droppedSlot.appendChild(droppedImg)
    // change the FindMeCard
    updatePickedCards(droppedImg.id)
  }

  const getFirstFindItem = () => {
    let randomItem = letters[Math.floor(Math.random() * letters.length)]
    setFindMeItem(randomItem)
  }

  const updatePickedCards = card => {
    setPickedCard(card)
    checkPenalty()
    let newArr = unrevealedLetters.filter(item => item.id !== card)
    unrevealedLetters = newArr
    updateFindMeItem(unrevealedLetters)
    if (unrevealedLetters.length === 0) {
      setAllFound(true)
    }
  }

  const updateFindMeItem = newArr => {
    let randomItem = newArr[Math.floor(Math.random() * newArr.length)]
    setFindMeItem(randomItem)
  }

  let unrevealedLetters = letters

  let checkPenalty = () => {
    if (findMeItem && pickedCard && findMeItem.id !== pickedCard) {
      props.penalize()
    }
  }

  return (
    <div className='p-5'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-9'>
          <DragAndDrop
            updatePickedCards={updatePickedCards}
            letters={letters}
            sortList={sortList}
            drop={drop}
            allowDrop={allowDrop}
            endGame={props.endGame}
            findMeItem={findMeItem}
            getSortLetters={getSortLetters}
          />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-3'>
          <FindMeCard findMeItem={findMeItem} allFound={allFound} />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
