import { useState } from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { Input, Avatar, Tooltip, Button, Dropdown, Menu } from "antd";
import {
    SearchOutlined,
    BellOutlined,
    MessageOutlined,
} from "@ant-design/icons";
import { MdArrowDropDown } from "react-icons/md";
import "./SubNav.css";

const SubNav = ({ toggleSidebar }) => {

    const [messages, setMessages] = useState([
        "Message 1",
        "Message 2",
        "Message 3",
        "Message 4",
        "Message 5",
    ]);
    const [notifications, setNotifications] = useState([
        "Notification 1",
        "Notification 2",
        "Notification 3",
        "Notification 4",
        "Notification 5",
    ]);


    const markAllAsRead = (type) => {
        if (type === "messages") {
            setMessages([]);
        } else if (type === "notifications") {
            setNotifications([]);
        }
    };


    const renderMenu = (type, items) => (
        <Menu>
            {items.map((item, index) => (
                <Menu.Item key={index}>{item}</Menu.Item>
            ))}
            <Menu.Divider />
            <Menu.Item>
                <Button
                    type="primary"
                    block
                    onClick={() => markAllAsRead(type)}
                    disabled={items.length === 0}
                >
                    Mark All as Read
                </Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="sub-nav">
            <div className="header">
                <div className="header-left">
                    <Tooltip title="Menu">
                        <FaBars
                            style={{ marginRight: "10px", cursor: "pointer" }}
                            onClick={toggleSidebar}
                        />
                    </Tooltip>
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined />}
                        className="search-input"
                    />
                </div>

                <div className="header-right">
                    <Dropdown
                        overlay={renderMenu("messages", messages)}
                        trigger={["click"]}
                        placement="bottomRight"
                    >
                        <div className="gold" style={{ cursor: "pointer" }}>
                            Messages
                            <Tooltip title="Messages">
                                <MessageOutlined className="header-icon" />
                            </Tooltip>
                            <MdArrowDropDown />
                        </div>
                    </Dropdown>

                    <Dropdown
                        overlay={renderMenu("notifications", notifications)}
                        trigger={["click"]}
                        placement="bottomRight"
                    >
                        <div className="gold" style={{ cursor: "pointer" }}>
                            Notifications
                            <Tooltip title="Notifications">
                                <BellOutlined className="header-icon" />
                            </Tooltip>
                            <MdArrowDropDown />
                        </div>
                    </Dropdown>

                    <Tooltip title="User Profile">
                        <Avatar style={{ backgroundColor: "#87d068" }}>JD</Avatar>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};


SubNav.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default SubNav;
