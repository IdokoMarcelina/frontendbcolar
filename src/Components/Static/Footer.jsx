
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-heading">BCOLAR</h3>
        <p>
          The Artisan App aims to connect skilled artisans with clients in need
          of their services. The platform offers a streamlined process for
          showcasing talent, booking appointments, and fostering trust through
          ratings and reviews.
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Quicklink</h3>
        <ul className="footer-links">
          <li>
            <Link to="/">
            <div>Home</div>
            </Link>
          </li>
          <li>
          <Link to="/about">
            <div>About</div>
            </Link>
          </li>
          <li>
            <div>Artisans</div>
          </li>
          <li>
          <Link to="/collabo">
            <div>Collabo</div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
      <Link to="/contact">
        <h3 className="footer-heading">Contact</h3>
        </Link>
        <address>
          Industrial Training Fund – Along Miango Road, P.M.B 2199 Jos, Plateau
          State, Nigeria. 930272
        </address>
        <p className="b-link">
          <a href="Bcollar507@gmail.com">Bcolar507@gmail.com</a>
        </p>
        <p>
          +2348134963534, +2349012130382
        </p>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2024 BCOLAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
