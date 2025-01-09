import './Header.css';
import { useState } from 'react';
import { Dropdown, Drawer, Menu } from 'antd';
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

  // Items for Dashboard dropdown menu
  const dashboardItems = [
    {
      label: <Link to="/userdashboard">User Dashboard</Link>,
      key: 'userdashboard',
    },
    {
      label: <Link to="/admin">Admin Dashboard</Link>,
      key: 'admindashboard',
    },
    {
      label: <Link to="/artisandashboard">Artisan Dashboard</Link>,
      key: 'artisandashboard',
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
          <Dropdown overlay={<Menu items={signupItems} />} trigger={['click']}>
            <Link to="#" onClick={(e) => e.preventDefault()} className="signup-dropdown">
              Signup
            </Link>
          </Dropdown>
          <span className="divider">|</span>
          <Dropdown overlay={<Menu items={dashboardItems} />} trigger={['click']}>
            <Link to="#" onClick={(e) => e.preventDefault()} className="dashboard-dropdown">
              Dashboard
            </Link>
          </Dropdown>
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
        <Dropdown overlay={<Menu items={signupItems} />} trigger={['click']}>
          <Link to="#" className="drawer-link">Signup</Link>
        </Dropdown>
        <Dropdown overlay={<Menu items={dashboardItems} />} trigger={['click']}>
          <Link to="#" className="drawer-link">Dashboard</Link>
        </Dropdown>
      </Drawer>
    </div>
  );
};

export default Header;
