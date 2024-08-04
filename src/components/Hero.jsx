import profilePic from "../assets/Joshua.png"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay
    }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Joshua Yong
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"

              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Secondary School Student
            </motion.span>
            <motion.p className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={container(1)}
              initial="hidden"
              animate="visible">
              Hello! My name is Joshua Yong, and I’m currently diving into Additional Mathematics, Physics, Chemistry, and Accounting. These subjects fuel my curiosity and drive my passion for understanding how the world works from multiple perspectives. Outside of academics, I find joy in playing games and hitting the basketball court. Whether I’m strategizing my next move in a game or working on my shot, these activities help me balance the rigors of my studies with some fun and physical exercise. I’m excited to explore how these interests and academic pursuits will shape my future! Cheers!
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Joshua" className=" w-150 h-100 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
