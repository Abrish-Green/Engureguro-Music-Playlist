import React from 'react'

import logo from '../../Assets/logo/logo.jpg'
import { BiMenuAltRight } from 'react-icons/bi'
import { Outlet } from 'react-router-dom';
export const Header = () => {
  return (
    <>
      <div className="w-full h-24 bg-black grid grid-cols-6 border-b-4 border-red-900 sticky top-0  z-40">
        <div className="left-header border-white col-span-2">
          <a href="/" className="logo p-2 ml-5 inline-flex gap-2 items-center">
            <img src={logo} alt="Logo" className="logo w-14 h-16 md:w-16 md:h-20" id="logo" />
            <div className="site-name md:text-4xl font-logo-font-style font-bold text-white text-2xl"><span className="text-4xl md:text-6xl text-red-400 font-bold">እ</span>ንጉርጉሮ</div>
          </a>
        </div>
        <div className="right-header border-white col-span-4 text-white p-7">
          <ul className="gap-2 float-right hidden md:inline-flex">
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-md font-medium" href="#">Live</a>
            </li>
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-md font-medium" href="#">Categories</a>
            </li>
            <li>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-md font-medium" href="#">Upload</a>
            </li>
            <li>
              <a className="text-gray-300 text-gray-100 hover:ring-2 hover:shadow-md px-5 py-2 rounded-md text-md font-medium ring-1" href="#">Sign In</a>
            </li>
            <li>
              <a className="text-gray-300 text-gray-100 hover:ring-2 hover:shadow-md px-5 py-2 rounded-md text-md font-medium ring-1" href="#">Sign Up</a>
            </li>


          </ul>

          <div className="menu-bar flex md:hidden float-right">
            <BiMenuAltRight size={'40px'} color="white" />
          </div>
        </div>


      </div>
      <Outlet />
    </>
  )
}

export default Header