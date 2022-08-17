import React from 'react'
import SingleMusicCard from '../SingleMusicCard/Index'

 const ListOfFeaturedMusics = () => {
  return (
      <>
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