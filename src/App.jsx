import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsGrid from './components/SkillsGrid'
import About from './components/About'
import Timeline from './components/WorkTimeline'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero /> 
    <SkillsGrid />
    <Timeline />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
