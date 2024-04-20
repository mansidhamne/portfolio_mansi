import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { textVariant, zoomIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { useEffect } from 'react'
import GitHubCalendar from "react-github-calendar";
import { CgGitFork } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";



const Github = () => {
  const [avatarURL, setAvatarURL] = useState();
  const [followersCount, setFollowersCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [publicRepoCount, setPublicRepoCount] = useState();
  const [nameAcc, setNameAcc] = useState();
  const [bioAcc, setBioAcc] = useState();

    useEffect(() => {
        fetch("https://api.github.com/users/mansidhamne")
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              setAvatarURL(result.avatar_url)
              setFollowersCount(result.followers)
              setFollowingCount(result.following)
              setPublicRepoCount(result.public_repos)
              setNameAcc(result.name)
              setBioAcc(result.bio)
            },
            (error) => {
              console.log(error)
            }
          );
    }, []);
    
  return (
    <>
        <motion.div 
            variants={textVariant()} 
            className="w-full max-w-7xl mx-auto mt-8"
        >
            <p className={styles.sectionSubText}>My Work Pt.2</p>
            <h2 className={styles.sectionHeadText}>Github.</h2>
        </motion.div>
        <motion.div
          variants={zoomIn()}
          className='mt-8 mb-32 bg-black flex flex-col-reverse justify-between lg:flex-row-reverse rounded-2xl px-8 py-12 gap-6'
        >
          <div className=''>
            <h3 className='text-purple-300 mb-4 font-semibold text-lg'>Days I Code</h3>
            <GitHubCalendar
              username='mansidhamne'
              blockSize={12}
              blockMargin={2.5}
              fontSize={8}
              theme={{
                light: ["#f3e8ff","#e9d5ff","#d8b4fe","#c084fc", "#a855f7"], 
              }}
              style={{
                color:"white"
              }}
            />
          </div>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row gap-10 justify-between'>
                <div className='flex flex-col justify-between items-center gap-2'>
                  <img src={avatarURL} alt="avatar" className='rounded-full w-20 h-20 border-2 border-purple-300'/>
                  <p className='text-sm text-white hover:font-semibold hover:italic'>{nameAcc}</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row gap-8 mr-3'>
                    <p className='text-center text-white font-semibold'>{followersCount}<br/><span className='text-[10px] text-slate-300 font-normal'>Followers</span></p>
                    <p className='text-center text-white font-semibold'>{followingCount}<br/><span className='text-[10px] text-slate-300 font-normal'>Following</span></p>
                  </div>
                  <p className='text-center text-white font-semibold'>{publicRepoCount}<br/><span className='text-[10px] text-slate-300 font-normal'>Repositories</span></p> 
                </div>
              </div>
              <div className='flex flex-row justify-between gap-6'>
                  <button href="https://github.com/mansidhamne" target="_blank"
                    className='text-white flex flex-row bg-purple-400 px-4 sm:px-8 py-2 rounded-lg gap-2 hover:cursor-pointer hover:text-purple-400 hover:bg-transparent'><CgGitFork size={20}/><FaStar size={19}/></button>
                  <button href="https://github.com/mansidhamne" target="_blank"
                    className='text-white bg-purple-400 px-8 py-1 rounded-lg hover:cursor-pointer hover:text-purple-400 hover:bg-transparent'>Follow Me!</button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className='absolute bottom-2 xs:bottom-0 w-full flex justify-center items-center'>
        <a href="#contact">
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

export default SectionWrapper(Github, 'github')