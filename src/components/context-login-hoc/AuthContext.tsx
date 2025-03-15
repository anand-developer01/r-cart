import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define types for user data and context
interface UserData {
    id: number;
    username: string;
    email: string;
    // Add other properties as needed
}

interface AuthContextType {
    isAuth: boolean;
    userData: UserData | null;
    loginAction: (loginData: { username: string; password: string }) => Promise<void>;
    logOut: () => void;
    isSessionAlive: () => void;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Add type for children prop
interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContextUser = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sessionUserData = localStorage.getItem('user');
        if (sessionUserData) {
            setUserData(JSON.parse(sessionUserData));
            setIsAuth(true);
        } else {
            isSessionAlive();
        }
    }, []);

    const loginAction = async (loginData: { username: string; password: string }) => {
        try {
            const res = await axios.get<UserData[]>(`https://jsonplaceholder.typicode.com/users?id=${loginData.username}`);
            localStorage.setItem("user", JSON.stringify(res.data[0])); // assuming res.data[0] is the user object
            setUserData(res.data[0]);
            setIsAuth(true);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }
    };

    const logOut = () => {
        localStorage.removeItem("user");
        setUserData(null);
        setIsAuth(false);
        navigate('/login');
    };

    const isSessionAlive = () => {
        const sessionUserData = localStorage.getItem('user');
        if (!sessionUserData) {
            navigate('/');
        }
    };

    return (
        <AuthContextUser.Provider value={{ isAuth, userData, loginAction, logOut, isSessionAlive, setIsAuth }}>
            {children}
        </AuthContextUser.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContextUser);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;
