import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()} 
        className="w-full max-w-7xl mx-auto mt-8">
          <p className={styles.sectionSubText}>What I Know</p>
          <h2 className={styles.sectionHeadText}>Skillset.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-6 mb-32 max-w-full'>
        {technologies.map((technology) => (
          <div className='w-40 h-36' key={technology.name}>
            <BallCanvas icon = {technology.icon} name = {technology.name}/>
          </div>
        ))}
      </div>
      <div className='absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center'>
          <a href="#work">
            <div className='w-[35px] h-[60px] rounded-3xl border-4 border-violet-950 flex justify-center items-start p-2'>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition = {{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-violet-950 mb-1"
              />
            </div>
          </a>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")