import { LandingHeaderText } from './LandingHeaderText';
import React from 'react'
import { SearchTags, sampleData } from './SearchTags';
import { SearchBar } from './SearchBar';
import { motion } from 'framer-motion'
import ClickAwayListener from '../Shared/ClickAwayListener';

/**
 * Redux-State: Drawer: Boolean
 * @returns 
 */
 const LandingBanner = () => {
  return (
    <>
      
        <div className="w-full h-auto bg-black">
              <div className="into w-full text-white grid sm:grid-cols-2 md:grid md:grid-cols-3 py-4">
                  <div className="hidden md:flex"></div>
                  <motion.div
                      initial={{ opacity:.4, y: -40 }}
                      animate={{ opacity:1, y: 0 }}
                      key={'landing-banner'}
                      className="landing-header-body p-7">
                        <LandingHeaderText />
                        <div className="search-artist">
                                  <SearchBar />
                                  <SearchTags data={[{
        title: "button",
        link: ""
    },
    {
        title: "button",
        link: ""
    },]} />
                        </div>
                  </motion.div>
                <div className=""></div>
              </div>
        </div>
  </>
  )
}

    
  export default LandingBanner;