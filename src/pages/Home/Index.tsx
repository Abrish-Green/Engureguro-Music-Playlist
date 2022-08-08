import React from 'react'
import LandingBanner from '../../Components/LandingBanner/Index';
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
        </div>
      </>
  )
}
export default Index;