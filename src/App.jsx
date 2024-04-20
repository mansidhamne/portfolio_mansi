import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works, Github, StarsCanvas, Footer} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className=' relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />   
        <Tech />
        <Works />
        <Github />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
