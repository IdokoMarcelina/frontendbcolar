import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Static/Header';
import Footer from './Components/Static/Footer';
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
import Profile from './Pages/Profile';
import Dashboard from './Pages/AdminDashBoard/dashboard';
import ServiceForm from './Components/serviceForm';  
import ProfileCard from './Components/admindash/ProfileCard'; 
import Test from './Components/Test';
import UserManagementCard from '../src/Components/UserManagementCard';
import DashboardLayout from './Layout/DashboardLayout';
import Bio from './Components/Bio';

const Layout = ({ children }) => {
  const location = useLocation();

  const hiddenRoutes = ['/admin', '/artisandashboard', '/userdashboard,', '/signin','/signup-artisan', '/signup-user', '/verification', '/chat'];

  const hideHeaderFooter = hiddenRoutes.includes(location.pathname);


  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Client />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Siginin />} />
          <Route path="/signup-artisan" element={<SignupFlow />} />
          <Route path="/signup-user" element={<UserSignup />} />
          <Route path="/verification" element={<Verification />} />

          <Route path="/collabo" element={<Collabo />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/Usermanagement" element={<UserManagementCard />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/post-gig" element={<FormComponent />} />
          <Route path="/admin-profile-edit" element={<ProfileCard />} />

          <Route path="/artisandashboard" element={<Profile />} />

          <Route path="/edit" element={<Edit />} />
          <Route path="/artisan/:artisanId" element={<Bio />} />

          <Route path="/admin" element={<Dashboard />} />

          <Route path="/addService" element={<ServiceForm />} />
          <Route path="/userdashboard" element={<DashboardLayout />} />
          
          {/* <Route path="/UserProfileCard" element={<UserProfileCard />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>  
     
    
  

          <Route path="/userdashboard" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
