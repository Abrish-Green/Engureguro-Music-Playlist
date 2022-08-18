import React from 'react'
import { MdOutlineFavoriteBorder, MdSkipPrevious } from 'react-icons/md'
import { BsPlayCircle, BsVolumeDownFill } from 'react-icons/bs'
import { IoPauseCircleOutline } from 'react-icons/io5'
import { MdSkipNext } from 'react-icons/md'
const MusicPlayerController = () => {
  return (
      <>
          <div className="control w-[80%] h-auto border m-1 p-2 flex-col md:inline-flex md:flex-row justify-center shadow-lg">
              <div className="title w-full md:w-1/3 border-b md:border-none">
                  <div className="w-full py-4 text-xl px-4 flex-col justify-end">
                     <span className="md:text-xl">Like I'm Gonna Lose You</span> 
                    <div className="text-sm font-thin md:font-medium">By Artist</div>
                  </div>
                  
              </div>
              <div className="controls  p-2 grid grid-cols-5 md:inline-flex w-full items-center md:justify-center md:gap-10 text-4xl sm:text-5xl md:text-6xl">
                  <div className="like col-span-1 flex justify-end md:text-3xl">
                      <MdOutlineFavoriteBorder />
                  </div>
                  <div className="control inline-flex gap-2 justify-center col-span-3">
                      <button>
                          <MdSkipPrevious />
                      </button>
                      <button>
                          <BsPlayCircle  className="md:text-6xl"/>{false && <IoPauseCircleOutline  className="md:text-6xl"/>}
                    </button>
                      <button>
                          <MdSkipNext />
                      </button>
                      
                  </div>
                  <div className="volume col-span-1 flex justify-start">
                      <BsVolumeDownFill className="md:text-4xl" />
                  </div>
              </div>
        </div>
      </>
  )
}

export default MusicPlayerController