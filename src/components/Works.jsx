import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  darkMode,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${darkMode ? 'bg-slate-950' : 'bg-black' }  p-5 rounded-2xl sm:w-[360px] w-[300px] overflow-hidden`}
      >
        <div className="overflow-hidden">
          <h3 className={`${darkMode ? 'text-orange-300' : 'text-violet-300'} font-semibold text-[24px]`}>{name}</h3>
          <p className='my-2 text-slate-400 text-[14px] text-justify'>{description}</p>
          <div className='relative w-full h-[200px] pt-2'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end items-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
          </div>
        </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({darkMode}) => {
  return (
    <>
      <motion.div 
        variants={textVariant()} 
        className="w-full max-w-7xl mx-auto mt-8"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='mt-12 mb-32 flex flex-wrap gap-7 justify-center overflow-hidden'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} darkMode={darkMode}/>
        ))}
      </div>
          
      <div className='absolute xs:bottom-0 bottom-4 w-full flex justify-center items-center'>
        <a href="#github">
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
    </>
  );
};

export default SectionWrapper(Works, "work");