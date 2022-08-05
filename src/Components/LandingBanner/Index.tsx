import React from 'react'

 const LandingBanner = () => {
  return (
      <>
        <div className="w-full h-auto bg-black">
              <div className="into w-full border-white border text-white grid grid-cols-3 py-4">
                  <div></div>
                  <div>
                    <div className="intro-header text-6xl font-semibold">
                      Discover Our Culture
                  </div>
                  <div className="intro-description p-5">
                      Explore 15+ million radio shows, DJ mixes and podcasts made by passionate creators
                  </div>
                  <div className="search-artist">
                          <div className="mb-4">
                              <input type="text" className="border-none w-96 h-10 py-2 px-4" placeholder="Search for Genre, Tag or Category"/>
                            </div>
                      <div className="artist-tags">
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              <button className="border border-white py-1 px-5 m-1 rounded-full">button 1</button>
                              
                      </div>
                      </div>
                  </div>
                  <div></div>
              </div>
        </div>
      </>
  )
}
export default LandingBanner;