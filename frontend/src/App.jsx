import { useState } from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import HeroSection from './components/herosection/Herosection.jsx'
import Servicesection from './components/servicesection/Servicesection.jsx'
import AboutSection from './components/aboutsection/Aboutsection.jsx'
import ProjectSection from './components/projectsection/Projectsection.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <Servicesection/>
      <AboutSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
