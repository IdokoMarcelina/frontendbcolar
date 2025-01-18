import React, { useState, useEffect } from 'react';
import UserDashLayout from './UserDashLayout';
import ProductPage from '../../Pages/ProductPage/ProductPage';


const UserDashboard = () => {
    const [firstname, setFirstname] = useState(''); 
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);      

    useEffect(() => {
        const userData = localStorage.getItem('user'); 
        const token = localStorage.getItem('token');   

        if (userData && token) {
            const parsedUser = JSON.parse(userData); 
            setFirstname(parsedUser.name);       
            setLoading(false); 
        } else {
            setError('User not found or not authenticated');
            setLoading(false); 
        }
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <UserDashLayout>
            <div>
                <h1>Hello, {firstname || 'User'}!</h1> 
               <ProductPage/>
            </div>
        </UserDashLayout>
    );
};

export default UserDashboard;
