import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn&apos;t exist.</p>
      <Link to="/" className="back-home">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
