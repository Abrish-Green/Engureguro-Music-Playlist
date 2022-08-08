import React from 'react'
import { MusicCard } from './MusicCard';

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
      </>
  )
}

export default MusicCardList