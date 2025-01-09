import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    { name: "Plumbers", jobs: ["Pipe Repair", "Leak Fixing"] },
    { name: "Electricians", jobs: ["Wiring", "Lighting"] },
    { name: "Carpenters", jobs: ["Furniture Repair", "Custom Builds"] },
  ];

  return (
    <div>
      <header className="header">
        <div className="logo">{/* Add your logo here */}</div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div
            className="dropdown desktop-dropdown"
            onMouseEnter={() => setIsArtisansDropdownOpen(true)}
            onMouseLeave={() => setIsArtisansDropdownOpen(false)}
          >
            <span className="dropdown-title">Artisans</span>
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
                          <div className="nested-dropdown-item" key={job}>
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
          <Link to="/collabo">Collabo</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="sign-links">
          <Link to="/signin">Signin</Link>
          <span className="divider">|</span>
          <Link to="/usersignup">Signup</Link>
        </div>

        <FaBars className="hamburger-icon" onClick={toggleSidebar} />
      </header>

      <nav className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <Link to="/" onClick={closeSidebar}>
          Home
        </Link>
        <Link to="/about" onClick={closeSidebar}>
          About
        </Link>
        <div className="dropdown">
          <span
            className="dropdown-title"
            onClick={(e) => {
              e.preventDefault();
              toggleArtisansDropdown();
            }}
          >
            Artisans
          </span>
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
        <Link to="/contact" onClick={closeSidebar}>
          Contact
        </Link>
        <div className="sign-links">
          <Link to="/signin" onClick={closeSidebar}>
            Signin
          </Link>
          <span className="divider">|</span>
          <Link to="/usersignup" onClick={closeSidebar}>
            Signup
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
