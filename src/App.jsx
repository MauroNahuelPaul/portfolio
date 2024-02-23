import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Proyects from './components/proyects/Proyects'
import Aboutme from './components/aboutme/Aboutme'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
