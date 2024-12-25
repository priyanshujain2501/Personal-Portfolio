import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  

  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <Education />
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  )
}

export default App
