import { useState } from "react";
import Sidebar from '../Components/sidebar/Sidebar';
import SubNav from '../Components/subnav/SubNav';
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="dashboard-content">
            <SubNav toggleSidebar={toggleSidebar} />
            <div className="dashboard-layout">
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
