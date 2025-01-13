import './App.css';
import Profile from './Pages/Profile';
import Header from './Components/Static/Header';
import Footer from './Components/Static/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Artisans from './Pages/Artisans';
import Contact from './Pages/Contact';
import Siginin from './Pages/Siginin';
import Collabo from './Pages/Collabo';
import About from './Pages/About';
import Chat from './Pages/Chat';
import ProductPage from './Pages/ProductPage/ProductPage';
import UserSignup from './Pages/UserSignup';
import Verification from './Pages/Verification';
import SignupFlow from './Pages/SignupFlow';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import FormComponent from './Components/CollaboComponents/FormComponent';

import Edit from './Components/Edit-profile/Edit';
import Review from './Components/Review';
import Book from './Components/Book';
import Client from './Pages/Client';
import { GrDashboard } from 'react-icons/gr';
import Main from './Pages/AdminDashBoard/Main';
import Dashboard from './Pages/AdminDashBoard/dashboard';
import BookingHistory from './Pages/BookingHistory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Siginin />} />
          <Route path="/signup-artisan" element={<SignupFlow />} /> {/* Generic signup route */}
          <Route path="/signup-user" element={<UserSignup />} /> {/* User-specific signup */}
          <Route path="/verification" element={<Verification />} />

          {/* Other Routes */}
          <Route path="/collabo" element={<Collabo />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/post-gig" element={<FormComponent />} />
          <Route path="/artisandashboard" element={<Profile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/admin" element={<Dashboard />} />
          {/* <Route path="/userdashboard" element={<GrDashboard />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      <Client/>
      <Edit/>
    </>
  );
}

export default App;