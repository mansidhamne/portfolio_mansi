import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { AuroraBackground } from "./ui";
import { hero } from "../assets"

const Hero = ({ darkMode }) => {

  return (
    <>
      <AuroraBackground darkMode={darkMode}>
        <div className='absolute inset-0 flex flex-col items-center justify-center lg:flex-row px-6'>
          <motion.div
            initial={{ opacity: 0.0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className={`sm:px-16 px-2 max-w-7xl mx-auto flex flex-col justify-between items-center sm:flex-row sm:items-start gap-5 mt-[90px] lg:mt-0`}>
           <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center mt-5 w-[50px]'>
               <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${darkMode ? 'bg-zinc-300' : 'bg-violet-950'}`} />
               <div className={`w-1 sm:h-80 h-40 ${darkMode ? 'zinc-gradient' : 'violet-gradient'}`} />
             </div> 
             <div className='pl-4 overflow-hidden'>
                 <h1 className={`${styles.heroHeadText} ${darkMode ? 'text-zinc-300' : ' text-slate-800'}`}>Hi, I'm <span className={`${darkMode ? 'text-orange-400' : 'text-violet-950'}`}>Mansi!</span></h1>
                   <p className={`${styles.heroSubText} ${darkMode ? 'text-slate-300/80' : ' text-slate-600'} overflow-hidden`}>I am a <span className={`${darkMode ? 'text-orange-200' : 'text-violet-900'}`}>fullstack web developer</span> <br/> and a <span className={`${darkMode ? 'text-orange-200' : 'text-violet-900'}`}>ML Enthusiast</span> with a passion <br className='xs:block hidden'/>for building and experimenting.</p>
               </div>
             </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='overflow-hidden'
          >
            <div class="relative">
              <img
                src={hero}
                alt="hero"
                className="z-50 w-[295px] sm:w-auto mb-12 lg:mb-0"
              />
            </div>
          </motion.div>
        </div>
        <div className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center'>
          <a href="#about">
            <div className={`w-[35px] h-[60px] rounded-3xl border-4 ${darkMode ? 'border-orange-200/80' : 'border-violet-950/80'} flex justify-center items-start p-2`}>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition = {{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-200/80' : 'bg-violet-950/80'} mb-1`}
              />
            </div>
          </a>
        </div>
      </AuroraBackground>
    </>
  );
}

export default Hero;