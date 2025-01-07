
import "./Header.css";
// import Bimage from "../assets/images/Bcolar.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isArtisansDropdownOpen, setIsArtisansDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsArtisansDropdownOpen(false);
    setActiveCategory(null);
  };

  const toggleArtisansDropdown = () => {
    setIsArtisansDropdownOpen(!isArtisansDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const categories = [
    {
      name: "Plumbers"
     
    },
    {
      name: "Electricians"
      
    },
    {
      name: "Carpenters"
      
    },
  ];
  return (
    <div>

<header className="header">
        <div className="logo">
          {/* <img src={Bimage} alt="Logo" /> */}
        </div>

       
        <nav className="nav-links">
          <Link to="/">
          <a href="#home">Home</a>
          </Link>
          <Link to="about">
          <a href="#about">About</a>
          </Link>
          <div
            className="dropdown desktop-dropdown"
            onMouseEnter={() => setIsArtisansDropdownOpen(true)}
            onMouseLeave={() => setIsArtisansDropdownOpen(false)}
          >
            <Link to="artisans" >
            <a href="#artisans">Artisans
              <img src="" alt="" />
            </a>
            </Link>
            {isArtisansDropdownOpen && (
              <div className="dropdown-menu">
                {categories.map((category) => (
                  <div key={category.name}>
                    <div
                      className="dropdown-item"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                    </div>
                    {activeCategory === category.name && (
                      <div className="nested-dropdown">
                        {category.jobs.map((job) => (
                          <div
                            className="nested-dropdown-item"
                            key={job}
                          >
                            {job}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="collabo">
          <a href="#about">Collabo</a>
          </Link>
          <Link to="contact">
          <a href="#contact">Contact</a>
          </Link>
        </nav>

       
        <div className="sign-links">
        <Link to="signin">
          <a href="#signin">Signin</a>
          </Link>
          <span className="divider">|</span>
          <Link to="usersignup">
          <>Signup</>
          </Link>
        </div>

        
        <FaBars className="hamburger-icon" onClick={toggleSidebar} />
      </header>

      
      <nav className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <Link to="/">
        <a href="#home" onClick={closeSidebar}>
          Home
        </a>
        </Link>
        <Link to="about">
        <a href="#about" onClick={closeSidebar}>
          About
        </a>
        </Link>
        <div className="dropdown">
        <Link></Link>
          <a
            href="#artisans"
            onClick={(e) => {
              e.preventDefault();
              toggleArtisansDropdown();
            }}
          >
            Artisans
            <img src="" alt="" />
          </a>
          {isArtisansDropdownOpen && (
            <div className="dropdown-menu">
              {categories.map((category) => (
                <div key={category.name}>
                  <div
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name}
                  </div>
                  {activeCategory === category.name && (
                    <div className="nested-dropdown">
                      {category.jobs.map((job) => (
                        <div
                          className="nested-dropdown-item"
                          key={job}
                          onClick={closeSidebar}
                        >
                          {job}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link></Link>
        <a href="#contact" onClick={closeSidebar}>
          Contact
        </a>
        <div className="sign-links">
          <a href="#signin" onClick={closeSidebar}>
            Signin
          </a>
          <span className="divider">|</span>
          <a href="#signup" onClick={closeSidebar}>
            Signup
          </a>
        </div>
      </nav> 
    </div>
  )
}

export default Header