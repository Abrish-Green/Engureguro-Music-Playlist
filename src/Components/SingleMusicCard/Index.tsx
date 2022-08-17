import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { GrLike } from 'react-icons/gr'
import { BiCommentDetail, BiShare } from 'react-icons/bi'
import { FaDownload } from 'react-icons/fa'
 const SingleMusicCard = () => {
  return (
    <>
      <div className="music-card flex-col md:grid md:grid-rows-1 md:grid-cols-8 border w-[70%] h-80 md:h-44 p-2">
        <div className="photo h-1/2 md:h-full col-span-2">
            <img src="https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="info h-1/2 flex-col overflow-clip p-2 md:h-full col-span-6">
          <div className="info h-auto border-b inline-flex gap-2 p-2 w-full items-center">
            <div className="text-3xl md:text-5xl"><BsPlayCircle /></div>
            <div className="break-all text-lg font-bold">Like I'm Gonna Lose You
              <div className="text-sm font-normal font-md">By Artist</div>
            </div>
          </div>
          <div className="interact h-auto inline-flex gap-2 px-2 items-center text-lg py-4 p-2 w-full">
            <button className="like inline-flex gap-1 items-center"><GrLike />
              <span className='text-sm font-semibold'>0</span>
            </button>
            <button className="comment inline-flex gap-1 items-center">
              <BiCommentDetail />
            </button>
            <button className="share inline-flex gap-1 items-center">
              <BiShare />Share
            </button>
            <button className="download inline-flex gap-1 items-center ">
              <FaDownload />
              <span className='hidden md:flex'>Download</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMusicCard