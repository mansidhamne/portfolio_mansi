import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { browser_logo, menu, close} from '../assets'
import '../index.css'

const Navbar = () => {
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
    <nav className={`${styles.paddingX} w-screen flex items-center fixed top-0 z-20 ${scrolled ? 'bg-slate-50/50 py-1' : 'py-4'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); 
            window.scrollTo(0,0);
          }}>
            <img src={browser_logo} alt="Logo" className='w-12 h-12 object-contain hover:scale-110 z-10'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 mr-4'>
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${
                active === Link.title 
                ? 'text-slate-900 underline decoration-violet-400'
                : 'text-slate-600'} hover:underline decoration-4 hover:decoration-violet-400 hover:scale-110 text-[18px] font-semibold cursor-pointer`}
                onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE NAVIGATION BAR */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close: menu} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} fixed inset-0  bg-slate-50 justify-center items-center z-10 p-20 top-[67px] right-0 my-0 min-w[140px] roundex-xl`}>
          <ul className='list-none flex flex-col justify-end items-center gap-4'>
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${
                active === Link.title 
                ? 'text-slate-900 underline decoration-violet-400'
                : 'text-slate-600'} hover:underline decoration-4 hover:decoration-violet-400 hover:scale-125 text-[24px] font-semibold cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(Link.title)}}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar