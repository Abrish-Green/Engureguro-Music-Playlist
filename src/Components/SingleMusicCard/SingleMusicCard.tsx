import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { VscComment } from 'react-icons/vsc'
import { BiShare } from 'react-icons/bi'
import { BsBookmarkCheck } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import { BsFillPlayFill } from 'react-icons/bs'


 const SingleMusicCard = () => {
  return (
      <>
        <div className="w-full h-auto m-1 border grid grid-rows-2 md:grid-cols-6 md:grid-rows-1">
              <div className="album-image border w-full md:col-span-2">
                  <img src="https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg" alt="Not Found" className="w-full h-full" />
              </div>
              <div className="album-body border w-full grid grid-rows-2 md:col-span-4">
                  <div className="border grid grid-cols-9">
                      <div className="left-icon border col-span-2 text-7xl py-5 flex justify-center">
                          <BsPlayCircle />
                      </div>
                      <div className="right-info col-span-7 border">
                          <div className="title row-span-2 mt-4">
                              <a href="" className="px-4 text-2xl font-bold" style={{wordWrap: 'break-word'}}>Can't You Hear Me Knockin</a>
                          </div>
                          <div className="owner px-5 font-thin text-sm">By <strong className='italic'>Rolling Stones</strong></div>
                      </div>
                  </div>
                  <div className="border w-full h-auto grid grid-rows-2 md:grid-cols-2">
                      <div className="interact justify-start p-4 inline-flex gap-2">
                          <div className="interactions">
                              <button className='flex items-center gap-1 text-lg  px-1'>
                                  <AiOutlineLike className='text-xl'/> <span className='font-thin'> 0</span>
                              </button>
                        </div>
                          <div className="interactions">
                              <button className='flex items-center gap-1 text-lg   px-1'>
                                  <VscComment className='text-xl'/> <span className='font-thin'> 0</span>
                              </button>
                              
                        </div>
                          <div className="interactions">
                              <button className='flex items-center gap-1 text-lg   px-1'>
                                  <BiShare className='text-xl'/> <span className='font-thin'> 0</span>
                              </button>
                        </div>
                          <div className="interactions">
                              <button className='flex items-center gap-1 text-lg   px-1'>
                                  <BsBookmarkCheck className='text-xl'/> <span className='font-thin'> 0</span>
                              </button>
                              
                        </div>
                          <div className="interactions">
                            <button className='flex items-center py-1 gap-1 text-lg   px-2'>
                                  <FaDownload className='text-xl'/>
                              </button>
                              
                        </div>
                      </div>
                      <div className="flex justify-start md:justify-end">
                        <div className="interact justify-start px-4 inline-flex gap-2">
                              <div className="interactions">
                                  <button className='flex items-center gap-1 text-lg  px-1'>
                                  <BsFillPlayFill className='text-xl'/> <span className='font-thin'> 0</span>
                              </button>
                                  
                            </div>
                              <div className="interactions">
                                <span className='flex items-center gap-1 text-md font-thin  px-1'>
                                    4d ago
                                </span>
                            </div>
                            <div className="interactions">#tag</div>
                      </div>
                            
                      </div>
                  </div>
              </div>
        </div>
      </>
  )
}
export default SingleMusicCard