import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { browser_logo, menu, close} from '../assets'
import '../index.css'
import { IoSunnySharp, IoMoon, IoCloseSharp, IoMenuSharp  } from "react-icons/io5";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-screen flex items-center fixed top-0 z-20 ${scrolled ? (darkMode ? 'bg-transparent py-1' : 'bg-slate-50/50 py-1') : 'py-4'} `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); 
            window.scrollTo(0,0);
          }}>
            <img src={browser_logo} alt="Logo" className='w-12 h-12 object-contain hover:scale-110 z-10'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li key={Link.id}
            className={`${
              active === Link.title 
              ? 'underline decoration-4 text-[18px] font-semibold'
              : 'hover:underline decoration-4  hover:scale-110 text-[18px] font-semibold cursor-pointer'}
              ${darkMode ? (active === Link.title ? 'text-white decoration-orange-300' : 'text-white hover:decoration-orange-300') : (active === Link.title ? 'text-slate-800 decoration-violet-400' : 'text-slate-800 hover:decoration-violet-400')}`}
              onClick={() => setActive(Link.title)}>
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
          ))}
          <div className="flex items-center">
          <button onClick={toggleDarkMode} className="dark:hover:bg-gray-800">
            {darkMode ? <IoSunnySharp size={20} style={{ color: 'white' }}/> : <IoMoon size={20}/> }
          </button>
        </div>
        </ul>
        {/* MOBILE NAVIGATION BAR */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {toggle ? (
            <IoCloseSharp
              className={`w-[28px] h-[28px] cursor-pointer object-contain ${darkMode ? 'text-white' : ''}`}
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMenuSharp
              className={`w-[28px] h-[28px] cursor-pointer object-contain ${darkMode ? 'text-white' : ''}`}
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div className={`${!toggle ? 'hidden' : 'flex'} fixed inset-0 ${darkMode ? 'bg-zinc-900/95' : 'bg-slate-50/95'}  justify-center items-center z-10 p-16 top-[67px] right-0 my-0 min-w[140px] roundex-xl`}>
          <ul className='list-none flex flex-col justify-end items-center gap-4'>
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${
                active === Link.title 
                ? 'text-slate-900 underline decoration-violet-400'
                : 'text-slate-600'} hover:underline decoration-4 hover:decoration-violet-400 hover:scale-105 text-[24px] font-semibold cursor-pointer
                ${darkMode ? (active === Link.title ? 'text-white decoration-orange-300' : 'text-white hover:decoration-orange-300') : ''}`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(Link.title)}}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
            
          ))}
          <button className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={toggleDarkMode} 
          >
            {darkMode ? <IoSunnySharp size={24} style={{ color: 'white' }}/> : <IoMoon size={24}/> }
          </button>
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar