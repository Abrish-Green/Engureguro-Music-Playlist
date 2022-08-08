import React from 'react'
import MusicCardList from './MusicCardList';
import { motion } from 'framer-motion';
 const Index = () => {
  return (
      <>
          <div className="">
              <motion.div
                initial={{x:-30}}
                animate={{ x: 0 }}
                key={'popular'}
                transition= {{ duration: 0.5 }}
                  className="w-full flex items-center justify-center mt-4">
                  <div className="title py-4 text-2xl md:text-4xl font-bold border-b-2 md:px-40 border-black ">
                      Popular Music
                  </div>
              </motion.div>
              <div className="w-full h-auto">
                  <MusicCardList />
              </div>
              <div className=""></div>
          </div>
      </>
  )
}
export default Index