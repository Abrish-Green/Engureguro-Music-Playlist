import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
import { TbAccessPoint } from 'react-icons/tb'
const Card = () => {
  return (
    <>
        <div className="flex-col w-full h-auto my-4 border shadow-lg">
              <div className="w-full border h-44">
                  <img src={"https://img.freepik.com/premium-vector/youtube-live-streaming-thumbnail-banner-design-with-3d-element-text-style-effect_92086-451.jpg?w=2000"} alt="Loading..." className="object-cover w-full h-full" />
            </div>
              <div className="p-2 detail ">
                  <div className="p-2 my-1 text-2xl font-bold break-all border-b-2 md:p-1 md:text-xl">Title</div>
                  <div className="flex-col md:gap-2 md:inline-flex">
                      
                      <div className="inline-flex gap-2 py-2 md:py-0 ">
                        <div className="text-2xl md:text-xl user-icon text-slate-500"><FaUserCircle /></div>
                        <div className="text-lg font-bold break-all md:text-sm user-name">User Name</div>
                      </div>
                      <div className="inline-flex items-center gap-1 mx-4 md:m-0 live-listeners">
                          <span className="inline-flex items-center gap-1 text-lg font-semibold text-green-700">
                              <span>
                                  <TbAccessPoint className='text-2xl text-red-700 bg-white border rounded-full md:text-md' /> 
                              </span>
                              <span className="text-2xl md:text-sm">
                                  Started 2 min ago 
                              </span>
                               </span>
                          <span className="text-2xl md:text-xl text-slate-700"><BsFillEyeFill /></span>
                          <span className="font-extrabold break-all text-md text-slate-600 md:text-sm">1,234 Watching</span>
                      </div>
                  </div>
                  <div className="p-2 text-lg font-bold md:text-sm tags text-slate-700">
                      #tags #tags
                  </div>
              </div>  
               
        </div>
    </>
  )
}

export default Card
