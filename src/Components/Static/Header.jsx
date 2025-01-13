import './Header.css';
import { useState } from 'react';
import { Drawer, Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const navigate = useNavigate()
  const redirectUser = async ()=>{

    console.log('dashboard has been clicked');
    
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      
      if (!token) {
        navigate('/signin');
        return;
      }

      const response = await axios.get('https://backend-bcolar.onrender.com/api/auth/mydashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });
      console.log(response);

      const { user_type } = response.data;
      console.log(user_type);
      
      if (user_type === 'admin') {
        navigate('/admin');
      } else if (user_type === 'artisan') {
        navigate('/artisandashboard');
      } else {
        navigate('/userdashboard');
      }
    } catch (error) {
      // console.error('Error fetching user details:', error);
      // navigate('/signin');
    } finally {
      setLoading(false);
    }
  };
  // Items for Signup dropdown menu
  const signupMenu = (
    <Menu>
      <Menu.Item key="signup-artisan">
        <Link to="/signup-artisan">Signup as Artisan</Link>
      </Menu.Item>
      <Menu.Item key="signup-user">
        <Link to="/signup-user">Signup as User</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>BCOLAR</h1>
        </div>

        <nav className="nav-linkw">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/productPage">Services</Link>
          <Link to="/collabo">Collabo</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="sign-links">
          <Link to="/signin">Signin</Link>
          <span className="divider">|</span>
          <Dropdown overlay={signupMenu} trigger={['click']} placement="bottomCenter">
            <span className="signup-dropdown" style={{ cursor: 'pointer' }}>Signup</span>
          </Dropdown>
          <span className="divider">|</span>

          <a onClick={redirectUser}>
            Dashboard
          </a>
          {/* <Link onClick={redirectUser}>Dashboard itself</Link>   */}
        </div>

        <MenuOutlined className="hamburger-icon" onClick={() => setIsDrawerOpen(true)} />
      </header>

    
    </div>
  );
};

export default Header;
