import aboutImg from "../assets/JoshuaAboutMe.png"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6"> As a passionate blogger, I enjoy sharing insights and stories from my life and interests with a broader audience. However, academic hit me so hard and causing me feel so stress. Thus, writing blogs is a good ways to me to relieve those stress. When I’m not immersed in my studies or writing for my blog, you’ll often find me playing games too. The games I'm playing now are Apex, Call of Duty, Valorant, and Fortine. If you want to play with me, feel free to pm me! And that's all from me. Have a nice day~</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
