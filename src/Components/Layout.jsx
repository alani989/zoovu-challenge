import React from 'react'
import Card from './Card'
import FindMeCard from './FindMeCard'
import LogoSort from './LogoSort'

const Layout = () => {

  const drawRandomCards = () => {
      return (
        <div className='p-3'>
          <Card />
        </div>
      )
  }

  return (
    <div className='p-5'>
      <div className='row'>
        <div className='d-flex col-9 p-3'>
            { (forlet i=0;i<4;i++) {
                drawRandomCards()
            }}
        
        </div>
        <div className='find-this-card-div d-flex col-3 justify-content-center p-3'>
          <ul>
            <li>
              <h3>Find This Card</h3>
            </li>
            <li>
              <FindMeCard />
            </li>
          </ul>
        </div>
      </div>
      <div className='row logo-div p-3'>
        <LogoSort />
      </div>
    </div>
  )
}

export default Layout
