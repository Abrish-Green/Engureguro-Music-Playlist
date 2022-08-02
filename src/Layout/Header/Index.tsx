import React from 'react'

import logo from '../../Assets/logo/logo.jpg'

export const Header = () => {
  return (
      <>
      <div className="w-full h-24 border bg-black grid grid-cols-6">
        <div className="left-header border border-white col-span-2">
          <div className="logo p-2 ml-5 inline-flex gap-2 items-center">
            <img src={logo} alt="Logo" className="logo w-16 h-20" id="logo" />
            <div className="site-name text-4xl font-['Cormorant Garamond'] font-bold  text-white">Engureguro</div>
          </div>              
        </div>
        <div className="right-header border border-white col-span-4">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        
      </div>
      </>
  )
}

export default Header