import React from 'react'
import { styles } from '../styles'
import { FaHeart } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";

const Footer= () => {
  return (
    <div className='p-5 border-t-2 border-violet-400'>
        <p className={`${styles.paddingX} font-semibold text-center text-violet-950 text-xs sm:text-base`}>
          <span>Desgined & Developed with </span>
          <FaHeart className='inline'/><span> and </span><FaCoffee className='inline'/><span> by Mansi Dhamne in 2024</span></p>
    </div>
  )
}

export default Footer