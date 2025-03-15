import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const WithAuthHOC: React.FC = () => {
    const sessionUserData = localStorage.getItem('user');
    
    if (sessionUserData?.length) {
        return <Outlet />;
    }
    return <Navigate to='/login' />;
};

export default WithAuthHOC;
