import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginContext from './LoginContext';
import AuthProvider from './AuthContext';
import WithAuthHOC from './WithAuthHOC';

const App: React.FC = () => {
    return (
        <HashRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<WithAuthHOC />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/" element={<LoginContext />} />
                </Routes>
            </AuthProvider>
        </HashRouter>
    );
};

export default App;
