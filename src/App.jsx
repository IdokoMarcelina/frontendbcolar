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
import Collabo from './Pages/Collabo'
import About from './Pages/About'
import Chat from './Pages/Chat'
import ProductPage from './Pages/ProductPage/ProductPage'
import UserSignup from './Pages/UserSignup'
import Verification from './Pages/Verification'
import SignupFlow from './Pages/SignupFlow'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import FormComponent from './Components/CollaboComponents/FormComponent'




function App() {

  return (
    <>
    {/* <Edit/> */}
    {/* <Profile/> */}
    {/* <Review/> */}
    {/* <Book/> */}
    {/* <Client/> */}
    <BrowserRouter>
         <Header />
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/artisans" element={<Artisans/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/productpage" element={<ProductPage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<Siginin/>} />
            <Route path="/signup" element={<SignupFlow />} />
            <Route path="/usersignup" element={< UserSignup />} />
            <Route path="/verification" element={< Verification />} />

            <Route path="/collabo" element={<Collabo/>} />
            <Route path='/Chat' element={<Chat/>} />

            <Route path ="/forgotPassword" element={<ForgotPassword/>}/>
            <Route path ="/resetPassword" element={<ResetPassword/>}/>
            <Route path="/post-gig" element={<FormComponent />} />

          </Routes>
        {/* <Footer/> */}
        
      </BrowserRouter>
        
    </>
  )
}

export default App
