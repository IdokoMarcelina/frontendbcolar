import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import BookingHistory from './Pages/BookingHistory';
import ArtisanProfiles from "./pages/ArtisanProfiles";
// import MessagingInterface from "./pages/MessagingInterface";
import UserSettings from './Pages/UserSettings';
import UserProfiles from './Pages/Userprofile';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Collabo from "./Pages/Collabo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/collabo",
        element: <Collabo />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />, // Dashboard with charts
            },
            {
                path: "bookings",
                element: <BookingHistory />,
            },
            {
                path: "artisan-profiles",
                element: <ArtisanProfiles />,
            },
            {
                path: "artisan-profiles",
                element: <ArtisanProfiles />,
            },
            // {
            //     path: "messaging",
            //     element: <MessagingInterface />,
            // },
            {
                path: "settings",
                element: <UserSettings />, // User settings page
            },
            {
                path: "profile",
                element: <UserProfiles />, // User profile page
            },
        ],
    },
    {
        path: "*", // Catch-all for undefined routes
        element: <NotFound />,
    },
]);

export default router;
