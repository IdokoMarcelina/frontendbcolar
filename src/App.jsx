import { useState } from 'react'
import './App.css'
import Profile from './Pages/Profile'
import Header from './Components/Static/Header'
import Footer from './Components/Static/Footer'
import {BrowserRouter, Routes, Route,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Artisans from './Pages/Artisans'
import Contact from './Pages/Contact'
import Siginin from './Pages/Siginin'
import PageTwo from './Pages/PageTwo'
import Signup from './Pages/Signup'
import Collabo from './Pages/Collabo'
import About from './Pages/About'
import Edit from './Components/Edit-profile/Edit'
import Review from './Components/Review'
import Book from './Components/Book'
import Client from './Pages/Client'
import UserSignup from './Pages/UserSignup'
import router from "./router"


function App() {

  return (
    <>
    {/* <Edit/> */}
    {/* <Profile/> */}
    {/* <Review/>
    <Book/>
    <Client/> */}
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
            <Route path="/collabo" element={<Collabo/>} />

          </Routes>
        <Footer/>
        
      </BrowserRouter>
         {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
