import React from 'react'
import CardList from '../../Components/Live/CardList'

const Index = () => {
  return (
      <>
          <div className="live-stream flex-col p-10 ">
              <div className="live-stream-menu border-b-2 border-red-600 py-4 inline-flex justify-between items-center w-full">
                  <div className="filter px-4 text-3xl md:text-5xl font-bold text-red-800">Live Streams</div>
                  <div className="broadcast px-4 py-1">
                      <button className="btn px-4 py-2 border bg-red-600 text-white shadow-lg rounded-lg">Start Broadcasting</button>
                  </div>
              </div>
              <CardList />
          </div>
      </>
  )
}

export default Index