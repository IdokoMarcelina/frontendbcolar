import './Header.css';
import { useState } from 'react';
import { Dropdown, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const artisanItems = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Plumbing Service
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Electrician Service
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          HairStyling Service
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Carpentry Service
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Dispatch Service
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Cleaning/Laundry
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Fumigation Service
        </a>
      ),
    },
  ];

  const signupItems = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#signup-user">
          Signup as User
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#signup-artisan">
          Signup as Artisan
        </a>
      ),
    },
  ];

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>BCOLLAR</h1>
        </div>

        <nav className="nav-linkw">
          <Link to ="/">
          <a>Home</a>
          </Link>
          <Link to ="/about">
          <a>About</a>
          </Link>
          <Dropdown menu={{ items: artisanItems }}>
            <a onClick={(e) => e.preventDefault()}>Services</a>
          </Dropdown>
          <Link to="/collabo">
          <a href="#collabo">Collabo</a>
          </Link>
          <Link to ="/contact">
          <a href="#contact">Contact</a>
          </Link>
        </nav>

        <div className="sign-links">
          <Link to="/signin">
          <a href="#signin">Signin</a>
          </Link>
          <span className="divider">|</span>
          <Dropdown menu={{ items: signupItems }}>
            <a onClick={(e) => e.preventDefault()} className="signup-dropdown">
              Signup
            </a>
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
        <a href="#home" className="drawer-link">Home</a>
        <a href="#about" className="drawer-link">About</a>
        <Dropdown menu={{ items: artisanItems }}>
          <a onClick={(e) => e.preventDefault()} className="drawer-link">Artisans</a>
        </Dropdown>
        <a href="#collabo" className="drawer-link">Collabo</a>
        <a href="#contact" className="drawer-link">Contact</a>
        <hr />
        <a href="#signin" className="drawer-link">Signin</a>
        <Dropdown menu={{ items: signupItems }}>
          <a onClick={(e) => e.preventDefault()} className="drawer-link">Signup</a>
        </Dropdown>
      </Drawer>
    </div>
  );
};

export default Header;
