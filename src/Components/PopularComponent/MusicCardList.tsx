import React from 'react'
import { MusicCard } from './MusicCard';
import { motion } from 'framer-motion';

interface MusicCardListProps{
    data?: {
            title: string,
            imageUrl: string,
            genre: string,
            tags: string[] | string,
            owner: string, 
        }[]
}

const sampleData: MusicCardListProps = {
    data : [
                {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        },
        {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
            }, {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        },
        {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        },
                {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        },
        {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
            }, {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        },
        {
                title: '',
                imageUrl: '',
                genre: '',
                tags: '',
                owner: '',
        }
        
        
    ]
}
const MusicCardList = ({ data = [] }: MusicCardListProps) => {
    console.log(sampleData)
  return (
      <>
        <div className="px-24 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-32 md:py-12 gap-5">
            {
                  sampleData.data && sampleData.data.map((music_card) => <MusicCard />)
              }  
          </div>
          <motion.div
              initial={{y:-50}}
                animate={{ y: 0 }}
                key={'see-more'}
                transition= {{ duration: 0.8 }}
              className="px-24 py-10 grid grid-cols-3">
              <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-2  rounded-lg  flex items-center justify-center w-32 md:w-44 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 cols-span-2">See More</button> 
          </motion.div>
      </>
  )
}

export default MusicCardList