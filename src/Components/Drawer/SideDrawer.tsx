import React from 'react'
import { motion } from 'framer-motion'
import ClickAwayListener from '../Shared/ClickAwayListener'
const SideDrawer = () => {
    const [open, setOpen] = React.useState(true)
  return (
    <>
      <ClickAwayListener onClickAway={open}>
          <motion.div
              className="drawer w-[60%] h-full md:hidden border-b-4 border-slate-800 bg-black fixed z-50"
              initial={{ opacity: 1, x: -400 }}
              animate={{ x: open ? 0 : -400 }}
              transition={{ duration: 0.7 }}
            >
        <div className="side-drawer-link-list p-2">
          <ul className="w-full h-auto p-2 flex-grow items-center">
            <li className="w-full px-1 hover:bg-red-800 border-b-2 border-red-900 shadow-md">
              <button className="w-full h-full py-3  text-md text-white">Live</button>
            </li>
            <li className="w-full px-1  hover:bg-red-800 border-b-2 border-red-900 shadow-md">
              <button className="w-full h-full py-3  text-md text-white ">Categories</button>
            </li>
            <li className="w-full px-1  hover:bg-red-800 border-b-2 border-red-900 shadow-md ">
              <button className="w-full h-full py-3  text-md text-white ">Upload</button>
            </li>
            <li className="w-full px-1  hover:bg-red-800 border-b-2 border-red-900 shadow-md">
              <button className="w-full h-full py-3  text-md text-white ">Random Music Collection</button>
            </li>
            </ul>
            <div className="flex-row sm:inline-flex w-full items-center sm:gap-2 p-2">
              <div className="w-[80%] mx-1 sm:w-[50%] px-1 bg-slate-100 m-1 border-slate-200 hover:bg-black  shadow-lg border rounded-3xl ">
                      <button className="w-full h-full py-3  text-md text-black hover:text-white">Login</button>
                    </div>
              <div className="w-[80%] mx-1 sm:w-[50%] px-1  bg-slate-100 m-1 border-slate-200 hover:bg-black  shadow-lg border rounded-3xl">
                      <button className="w-full h-full py-3  text-md text-black hover:text-white ">Sign Up</button>
                    </div>          
            </div>
             
            
          
              </div>
          </motion.div>
      </ClickAwayListener>
    </>
  )
}

export default SideDrawer
