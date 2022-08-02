import React from 'react'

import logo from '../../Assets/logo/logo.jpg'

export const Header = () => {
  return (
      <>
      <div className="w-full h-24 bg-black grid grid-cols-6">
        <div className="left-header border-white col-span-2">
          <div className="logo p-2 ml-5 inline-flex gap-2 items-center">
            <img src={logo} alt="Logo" className="logo w-14 h-16 md:w-16 md:h-20" id="logo" />
            <div className="site-name text-3xl font-logo-font-style font-bold  text-white hidden md:block">Engureguro</div>
          </div>              
        </div>
        <div className="right-header border-white col-span-4 text-white p-5">
          <ul className="inline-flex gap-2 float-right">
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium" href="#">Live</a>
            </li>
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium" href="#">Categories</a>
            </li>
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium" href="#">Upload</a>
            </li>
            <li>
              <a className="text-gray-100 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium" href="#">Login</a>
            </li>
            
            
          </ul>
        </div>
        
      </div>
      </>
  )
}

export default Header