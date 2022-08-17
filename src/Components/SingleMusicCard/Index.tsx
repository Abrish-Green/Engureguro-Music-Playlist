import React from 'react'

 const SingleMusicCard = () => {
  return (
    <>
      <div className="music-card flex-col border w-[70%] h-72 p-2">
        <div className="photo border h-1/2">
            <img src="https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="info border h-1/2 flex-col">
          <div className="info h-auto border inline-flex">
            <div className="">Icon</div>
            <div className="">Title</div>
          </div>
          <div className="interact h-auto border">Like and share</div>
        </div>
      </div>
    </>
  )
}

export default SingleMusicCard