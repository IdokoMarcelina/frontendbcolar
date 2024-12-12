import { useState } from 'react'
import './App.css'
import Profile from './Pages/Profile'
import Header from './Components/Static/Header'
import Footer from './Components/Static/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Artisans from './Pages/Artisans'
import Contact from './Pages/Contact'
import Siginin from './Pages/Siginin'
import Signup from './Pages/Signup'
import Collabo from './Pages/Collabo'
import About from './Pages/About'
import Chatlist from './Components/Chat/Chatlist'
import Chatwindow from './Components/Chat/Chatwindow'


function App() {

  return (
    <>
    <BrowserRouter>
         <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/artisans" element={<Artisans/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<Siginin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/collabo" element={<Collabo/>} />
            <Route path="/chat" element={<Chatlist />} />
            <Route path="/chat/:id" element={<Chatwindow />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
        
    </>
  )
}

export default App
