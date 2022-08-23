import React from 'react'
import Card from './Card';

const CardList = () => {
  return (
      <>
          
          <div className="grid w-full grid-flow-row grid-cols-1 p-4">
                    {
              [...Array(10)].map((i)=> <Card />)
        }
          </div>
        
    </>
  )
}

export default CardList
