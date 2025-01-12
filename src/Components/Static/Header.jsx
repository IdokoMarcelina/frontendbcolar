import './Header.css';
import { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Items for Signup dropdown menu
  const signupItems = [
    {
      label: <Link to="/signup-artisan">Signup as Artisan</Link>,
      key: 'signup-artisan',
    },
    {
      label: <Link to="/signup-user">Signup as User</Link>,
      key: 'signup-user',
    },
  ];

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
          <Link to="#" onClick={(e) => e.preventDefault()} className="signup-dropdown">
            Signup
          </Link>
          <span className="divider">|</span>
          <Link to="/dashboardredirect">Dashboard</Link>
        </div>

        <MenuOutlined className="hamburger-icon" onClick={() => setIsDrawerOpen(true)} />
      </header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        closable={true}
      >
        <Link to="/" className="drawer-link">Home</Link>
        <Link to="/about" className="drawer-link">About</Link>
        <Link to="/productPage" className="drawer-link">Services</Link>
        <Link to="/collabo" className="drawer-link">Collabo</Link>
        <Link to="/contact" className="drawer-link">Contact</Link>
        <hr />
        <Link to="/signin" className="drawer-link">Signin</Link>
        <Link to="/signup-artisan" className="drawer-link">Signup as Artisan</Link>
        <Link to="/signup-user" className="drawer-link">Signup as User</Link>
        <Link to="/dashboardredirect" className="drawer-link">Dashboard</Link>
      </Drawer>
    </div>
  );
};

export default Header;
