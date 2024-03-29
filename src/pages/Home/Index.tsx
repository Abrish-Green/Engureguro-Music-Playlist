import React from 'react'
import LandingBanner from '../../Components/LandingBanner/Index';
import ListOfFeaturedMusics from '../../Components/ListFeaturedMusic/ListOfFeaturedMusics';
import MusicPlayerController from '../../Components/MusicPlayerController/MusicPlayerController';
import PopularComponent from '../../Components/PopularComponent/Index'
 const Index = () => {
  return (
      <>
        <div className="home flex-col">
              <div className="header">
                  <LandingBanner />
              </div>  
              <div className="popular">
                  <PopularComponent />
        </div>
        <div className="list-play-list">
              <ListOfFeaturedMusics />
        </div>
        <div className="player-control flex justify-center">
            <MusicPlayerController />
        </div>
        
      </div>
      </>
  )
}
export default Index;