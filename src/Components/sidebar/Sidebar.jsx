import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
    FaTachometerAlt,
    FaBook,
    FaUserCog,
    FaComments,
    FaCogs,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";
import { BiHomeAlt } from "react-icons/bi";

const Sidebar = ({ isSidebarVisible }) => {
    const location = useLocation();


    const activeLinkStyle = (path) => {
        return location.pathname === path
            ? { color: "#fff", backgroundColor: "#808080", borderRadius: "4px", padding: "5px 10px" }
            : {};
    };

    return (
        <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>

            <div className="profile-section">
                <div className="profile-image">

                    <img src="https://via.placeholder.com/40" alt="Profile" />
                </div>
                {isSidebarVisible && <div className="username">John Doe</div>}
            </div>


            <ul className="nav-links">
                <li>
                    <Link to="/" >
                        <BiHomeAlt />
                        {isSidebarVisible && " Home"}
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard" style={activeLinkStyle("/dashboard")}>
                        <FaTachometerAlt />
                        {isSidebarVisible && " Dashboard"}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookings" style={activeLinkStyle("/dashboard/bookings")}>
                        <FaBook />
                        {isSidebarVisible && " Booking History"}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/artisan-profiles" style={activeLinkStyle("/dashboard/artisan-profiles")}>
                        <FaUserCog />
                        {isSidebarVisible && " Artisan Profiles"}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/messaging" style={activeLinkStyle("/dashboard/messaging")}>
                        <FaComments />
                        {isSidebarVisible && " Messaging"}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/settings" style={activeLinkStyle("/dashboard/settings")}>
                        <FaCogs />
                        {isSidebarVisible && " Settings"}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/profile" style={activeLinkStyle("/dashboard/profile")}>
                        <FaUser />
                        {isSidebarVisible && " Profile"}
                    </Link>
                </li>
            </ul>


            <div className="logout-section">
                <button className="logout-btn">
                    <FaSignOutAlt />
                    {isSidebarVisible && " Logout"}
                </button>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    isSidebarVisible: PropTypes.bool.isRequired,
};

export default Sidebar;
