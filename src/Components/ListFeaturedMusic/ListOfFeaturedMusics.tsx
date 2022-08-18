import React from 'react'
import SingleMusicCard from '../SingleMusicCard/Index'

 const ListOfFeaturedMusics = () => {
  return (
      <>
          <div className="p-2 flex justify-center">
              <div className="h-auto w-[75%] flex justify-center text-3xl font-bold py-4 border-t border-b-4 border-black">
                  Most Played Music Recently
              </div>
              
          </div>
            {
              [...Array(10)].map((item) => {
                  return (
                    <div className="w-full h-auto gap-2 p-2 mt-2 flex justify-center">
                            <SingleMusicCard />
                    </div>
                        )
            })
          }
          
           
      
      </>
  )
}

export default ListOfFeaturedMusics