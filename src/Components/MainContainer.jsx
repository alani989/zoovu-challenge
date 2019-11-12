import React, { useState, useEffect } from 'react'
import FindMeCard from './FindMeCard'
import DragAndDropContainer from './DragAndDropContainer'

const letters = [
  { id: 'z', src: 'z.png' },
  { id: 'o', src: 'o.png' },
  { id: 'o2', src: 'o2.png' },
  { id: 'v', src: 'v.png' },
  { id: 'u', src: 'u.png' },
]

let unrevealedLetters = letters

const MainContainer = props => {
  const [findMeItem, setFindMeItem] = useState(null)
  const [allFound, setAllFound] = useState(false)

  useEffect(() => {
    getFirstFindItem()
  }, [])

  const getFirstFindItem = () => {
    let randomItem = letters[Math.floor(Math.random() * letters.length)]
    setFindMeItem(randomItem)
  }

  const updatePickedCards = card => {
    if (findMeItem.id !== card) {
      props.penalize()
    }
    let newArr = unrevealedLetters.filter(item => item.id !== card)
    // update list
    unrevealedLetters = newArr
    updateFindMeItem(unrevealedLetters)
    if (unrevealedLetters.length === 0) {
      setAllFound(true)
    }
  }

  const updateFindMeItem = newArr => {
    let randomItem = newArr[Math.floor(Math.random() * newArr.length)]
    if (randomItem) {
      setFindMeItem(randomItem)
    }
  }

  return (
      <div className='row pt-3'>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-8'>
          <DragAndDropContainer
            penalize={props.penalize}
            updatePickedCards={updatePickedCards}
            letters={letters}
            endGame={props.endGame}
            findMeItem={findMeItem}
            unrevealedLetters={unrevealedLetters}
          />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-4'>
          <FindMeCard findMeItem={findMeItem} allFound={allFound} />
        </div>
      </div>
  )
}

export default MainContainer
