
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from './components/Link'




const App = () => {
  useEffect(() => {
    Aos.init()
  
    
  }, [])
  
  

  return (
    <>
    <Navbar />
    <div className="container">
      <Home/>
      {/* <Experience />  */}
      <Skills />
      <Projects />
      <Contact />
      <Link />
      
    </div>
    
    </>
  )
}

export default App
