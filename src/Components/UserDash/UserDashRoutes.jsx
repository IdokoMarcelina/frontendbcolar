import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashLayout from "./UserDashLayout"; 
import UserDashboard from "./UserDashboard";
import BookingHistory from "./BookingHistory";
import EditUserProfile from "./EditUserProfile";

const UserDashRoutes = () => {
  return (
    // <UserDashLayout>
      <Routes>
        <Route path="/" element={<UserDashLayout />} />
        <Route path="userdashboard" element={<UserDashboard />} />
        <Route path="booking-history" element={<BookingHistory />} />
        <Route path="editProfile" element={<EditUserProfile />} />
      </Routes>
    // </UserDashLayout>
  );
};

export default UserDashRoutes;
