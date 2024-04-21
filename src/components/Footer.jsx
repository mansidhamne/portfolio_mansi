import React from 'react'
import { styles } from '../styles'
import { FaHeart } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";

const Footer= ({darkMode}) => {
  return (
    <div className={`${darkMode ? 'border-orange-400' : 'border-violet-400'} p-5 border-t-2 `}>
        <p className={`${styles.paddingX} font-medium text-center ${darkMode ? 'text-orange-200' : 'text-violet-950'} tracking-wider text-xs sm:text-base`}>
          <span>Desgined & Developed with </span>
          <FaHeart className='inline'/><span> and </span><FaCoffee className='inline'/><span> by Mansi Dhamne in 2024</span></p>
    </div>
  )
}

export default Footer