import React from 'react'
import { motion } from 'framer-motion'
const SideDrawer = () => {
    const [open, setOpen] = React.useState(true)
  return (
      <>
          <motion.div
              className="drawer w-96 h-[84.5vh] md:hidden border-b-4 border-slate-800 bg-black"
              initial={{ opacity: 1, x: -400 }}
              animate={{ x: open ? 0 : -400 }}
              transition={{ duration: 0.7 }}
            >
              
          </motion.div>
      
    </>
  )
}

export default SideDrawer
