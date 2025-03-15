import React, { useContext } from 'react';
import { useAuth } from './AuthContext';

const Dashboard: React.FC = () => {
    const { userData, logOut } = useAuth();

    const handleLogout = () => {
        logOut(); // Log out and redirect to login page
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <h4>{userData?.username}</h4> {/* Displaying user's username */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
