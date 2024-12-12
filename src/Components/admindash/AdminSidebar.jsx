import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { TbHealthRecognition } from "react-icons/tb";
import { TbLogs } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

function AdminSidebar() {
  return (
    <Sidebar>
      <div className="title">
        <h4>Admin</h4>
      </div>

      <hr />

      <p className="sideTitles">MAIN</p>
      <span className="iconAndText">
        <MdDashboard className="iconsitself" />
        <li>Dashboard</li>
      </span>

      <p className="sideTitles">LISTS</p>
      <div className="partone">
        <li><FaUserAlt className="icons" /> User</li>
        <li><FaUserSecret className="icons" /> Artisan</li>
        <li><MdOutlineShoppingBasket className="icons" /> Ratings and Review</li>
      </div>

      <p className="sideTitles">USEFUL</p>
      <div className="partone">
        <li><IoBarChartSharp className="icons" /> Stats</li>
        <li><IoIosNotificationsOutline className="icons" /> Notifications</li>
        <li><FaEnvelope className="icons" /> Messages</li>
        <li><TbLogs className="icons" /> Reports</li>
      </div>

      <p className="sideTitles">SERVICE</p>
      <div className="partone">
        <li><TbHealthRecognition className="icons" /> System Health</li>
        <li><IoSettings className="icons" /> Settings</li>
      </div>

      <p className="sideTitles">USER</p>
      <div className="partone">
        <li><CgProfile className="icons" /> Profile</li>
        <li><GrLogout className="icons" /> Logout</li>
      </div>
    </Sidebar>
  );
}

export default AdminSidebar;

// Styled Components

const Sidebar = styled.div`
  background-color: #0000ff;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  hr {
    margin: 10px 0;
  }

  .sideTitles {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }

  .iconAndText {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .iconsitself {
      margin-right: 10px;
    }
  }

  .partone {
    margin-top: 10px;
    li {
      list-style-type: none;
      padding: 8px 0;
      display: flex;
      align-items: center;
    }
    .icons {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    display: none;  // Hide sidebar on small screens
  }
`;
