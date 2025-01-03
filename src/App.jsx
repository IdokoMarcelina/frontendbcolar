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
import PageTwo from './Pages/PageTwo'
import Signup from './Pages/Signup'
import Collabo from './Pages/Collabo'
import About from './Pages/About'
import ProductPage from './Pages/ProductPage/ProductPage'
import UserSignup from './Pages/UserSignup'
import Verification from './Pages/Verification'


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
            <Route path="/pagetwo" element={<PageTwo/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/usersignup" element={< UserSignup />} />
            <Route path="/verification" element={< Verification />} />
            <Route path="/collabo" element={<Collabo/>} />
            <Route path="/productpage" element={< ProductPage/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
        
    </>
  )
}

export default App
