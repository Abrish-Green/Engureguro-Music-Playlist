import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
const Card = () => {
  return (
    <>
        <div className="flex-col w-full h-auto my-4 border shadow-lg">
              <div className="w-full border h-80">
                  <img src={"https://img.freepik.com/premium-vector/youtube-live-streaming-thumbnail-banner-design-with-3d-element-text-style-effect_92086-451.jpg?w=2000"} alt="Loading..." className="object-cover w-full h-full" />
            </div>
              <div className="p-2 detail ">
                  <div className="p-2 my-1 text-2xl font-bold break-all border-b-2">Title</div>
                  <div className="flex-col md:gap-2 md:inline-flex">
                      
                      <div className="inline-flex gap-2">
                        <div className="text-2xl user-icon text-slate-500"><FaUserCircle /></div>
                        <div className="text-lg font-bold break-all user-name">User Name</div>
                      </div>
                      <div className="inline-flex items-center gap-2 mx-4 live-listeners">
                          <span className="text-lg font-semibold text-green-700"> Started 2 min ago  </span>
                          <span className="text-2xl text-slate-700"><BsFillEyeFill /></span>
                          <span className="font-extrabold break-all text-md text-slate-600">123,324,3443 Watching</span>
                      </div>
                  </div>
                  <div className="p-2 text-lg font-bold tags">
                      #tags #tags
                  </div>
              </div>  
               
        </div>
    </>
  )
}

export default Card
