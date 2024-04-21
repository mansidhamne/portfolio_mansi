import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FiDownload } from 'react-icons/fi';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { profile1 } from "../assets";
import pdf from "../assets/resume_mansi.pdf";

const About = ({ darkMode }) => {
  return (
    <>
      <motion.div 
        variants={fadeIn("", "", 0.1, 1)} 
        className="w-full max-w-7xl mx-auto mt-8 top-0"
      >
        <p className={`${styles.sectionSubText} ${darkMode ? 'text-white' : 'text-secondary'}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${darkMode ? 'text-orange-300' : 'text-violet-950'}`}>Overview.</h2>
      </motion.div>
      <div className={`w-full max-w-7xl mx-auto flex flex-col gap-12 justify-between items-center lg:flex-row lg:items-start mt-2 pb-2 xs:mb-8 xs:pb-8 `}>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className={`${darkMode ? 'text-orange-200/80' : 'text-slate-900'} text-justify text-[17px] lg:flex-2 flex flex-col justify-center items-center lg:items-start `}  
        >
            Hello! I'm Mansi, and I enjoy building fun projects by intergating different technologies.
            I have experience in TypeScript, JavaScript along with frameworks like React, Node.js and Next.js. I enjoy dabbling in UI/UX and getting to express my creative ideas. 
            <br/><br/> Through leadership roles in extracurricular activities, such as the 
            Rotaract Club and the Google Developer Student Club, 
            I've honed my skills in teamwork, creativity, and project management. 
            <br/><br/> I am also enthusiastic about Machine Learning and its applications. I am always eager to embark 
            on new challenges and collaborate on exciting ventures. I am currently pursuing my B-Tech Degree in Computer Science 
            at Sardar Patel Institute of Technology, Mumbai.
            <br/><br/> Fun fact about me: I love travelling and painting! 
            <br/><br/>
        </motion.p>
        <Tilt className='w-[370px] lg:w-[1000px]'>
          <motion.div
            variants={fadeIn("left", "spring", 0.75)}
            className='w-full p-[1px] rounded-[20px]'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='rounded-[20px] min-h-[280px]'
            >
              <img
                src={profile1}
                alt='profile'
                className='w-[400px] px-4'
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
      <motion.button 
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 xs:mt-0 flex flex-row items-center font-semibold py-2 px-4 rounded-lg hover:border-2 hover:bg-transparent  text-white ${darkMode ? 'bg-orange-400  border-orange-400 hover:text-orange-400' : ' bg-violet-800 text-white  border-violet-800 hover:text-violet-800'}`}
        onClick={() => {
          const pdfPath = pdf;
          const link = document.createElement('a');
          link.href = pdfPath;
          link.download = 'resume.pdf';
          link.click();
        }}
      >
        <FiDownload className="mr-2" />
        <span>Resume</span>
      </motion.button>
    </>
  );
}
export default SectionWrapper(About, "about");
