import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Proyects from './components/proyects/Proyects'
import Aboutme from './components/aboutme/Aboutme'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Proyects />
      <Contact />
    </>
  )
}

export default App
