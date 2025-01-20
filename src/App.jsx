import './App.css'; 
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Static/Header';
import Footer from './Components/Static/Footer';
import Home from './Pages/Home';
import Artisans from './Pages/Artisans';
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
import ChangePassword from './Pages/ChangePassword';
import FormComponent from './Components/CollaboComponents/FormComponent';
import Profile from './Pages/Profile';
import Dashboard from './Pages/AdminDashBoard/dashboard';
import ProfileCard from './Components/admindash/ProfileCard'; 
import UserManagementCard from '../src/Components/UserManagementCard';
import Bio from './Components/Bio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashRoutes from './Components/UserDash/UserDashRoutes';
import CategoryDetails from './Components/HomeComps/CategoryDetails';
import Category from './Components/HomeComps/Category';
import Edit from './Components/Edit-profile/Edit';
import CollaboPosts from './Components/Posts/CollaboPost';
import ServicePosts from './Components/Posts/ServicePost';
import ArtisanCard from './Components/ArtisanCard/ArtisanCard';
import Book from './Components/Book';
import ChatArea from './Components/Chat/ChatArea';
import ServiceForm from './Components/ServiceForm';



const Layout = ({ children }) => {
  const location = useLocation();
  
  const hiddenRoutes = [
    '/admin', '/artisandashboard', '/userdashboard', '/signin',
    '/signup-artisan', '/signup-user', '/verification', '/chat','chatarea',
    '/editProfile', '/booking-history', '/edit', '/collaboposts', '/servicepost',
    '/artisancard','/collabo','/productpage'

  ];

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/signin" element={<Siginin />} />
          <Route path="/signup-artisan" element={<SignupFlow />} />
          <Route path="/signup-user" element={<UserSignup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/collabo" element={<Collabo />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Usermanagement" element={<UserManagementCard />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/post-gig" element={<FormComponent />} />
          <Route path="/admin-profile-edit" element={<ProfileCard />} />
          <Route path="/artisandashboard" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/artisan/:artisanId" element={<Bio />} />
          <Route path="/collaboposts" element={<CollaboPosts />} />
          <Route path="/servicepost" element={<ServicePosts />} />
          <Route path="/book/:artisanId" element={<Book />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/addService" element={<ServiceForm />} />
          <Route path="/*" element={<UserDashRoutes />} />
          <Route path="/artisancard/:artisanId" element={<ArtisanCard />} />
          {/* <Route path="/chatarea" element={<ChatArea />} /> */}

          <Route path="/category" element={<Category/>} />
          <Route path="/categories/:category" element={<CategoryDetails/>} />
         
        </Routes>
        <ToastContainer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
