import React from 'react'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 mt-10'>
      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'>&copy; {new Date().getFullYear()} Joshua Yong Sheng Cheng.All right reserved.</motion.p>
      </div>
    </div>
  )
}

export default Contact
