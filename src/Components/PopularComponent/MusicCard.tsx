import { url } from 'inspector'
import React from 'react'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { motion } from 'framer-motion';

export const MusicCard = () => {
  return (
      <>
          <div className="group hover:cursor-pointer ">
          <motion.div
                initial={{y:-50}}
                animate={{ y: 0 }}
                key={'music-card'}
                transition= {{ duration: 0.8 }}
              className="w-[100%] md:w-full h-56 rounded-xl relative group p-2">
              <div className="absolute text-7xl top-[25%] left-[38%] z-30 text-white md:left[35%] group-hover:text-red-400">
                  <AiOutlinePlaySquare />
              </div>
                  <img src="https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg" alt="Not Found" className="absolute top-0 left-0 object-cover w-full h-full rounded-xl" />
                 
          </motion.div>
          <motion.div
                initial={{y:-50}}
                animate={{ y: 0 }}
                key={'music-card'}
                transition= {{ duration: 0.8 }} className="w-full px-5 mb-3 group-hover:text-black">
              <div className="text-lg font-bold title text-slate-600 group-hover:text-black">Title</div>
              <div className="text-sm author text-slate-600 group-hover:text-black">By Singer</div>
              <div className="text-sm tags text-slate-600 group-hover:text-black">#tags</div>
            </motion.div>
         </div>
      </>
  )
}

