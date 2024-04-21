import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works, Github, StarsCanvas, Footer} from './components'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark bg-gray-800' : 'bg-primary'} relative z-0`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />   
        <Tech darkMode={darkMode} />
        <Works darkMode={darkMode} />
        <Github darkMode={darkMode} />
        <div className='relative z-0'>
          <Contact darkMode={darkMode} />
          <StarsCanvas darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode}/>
      </div>
    </BrowserRouter>
  )
}

export default App
