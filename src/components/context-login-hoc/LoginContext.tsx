import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './auth.css'

interface UserInput {
    username: string;
    password: string;
}

const LoginContext: React.FC = () => {
    const [userInput, setUserInput] = useState<UserInput>({ username: '', password: '' });
    const { loginAction } = useAuth();
    const navigate = useNavigate();

    // Check if user is already logged in by looking for the user data in localStorage
    useEffect(() => {
        const sessionUserData = localStorage.getItem('user');
        console.log(sessionUserData)
        if (sessionUserData) {
            navigate('/dashboard'); // If user is logged in, redirect to dashboard
        }
    }, [navigate]);

    const handleSubmitEvent = (e: React.FormEvent) => {
        e.preventDefault();
        loginAction(userInput).then(() => {
            navigate('/dashboard'); // Navigate to the dashboard after successful login
        });
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    return (
        <div className='main'>
            <form onSubmit={handleSubmitEvent}>
                <div className="form_control">
                    <label htmlFor="user-email">Email:</label>
                    <input
                        type="text"
                        id="user-email"
                        name="username"
                        onChange={handleInput}
                    />
                </div>
                <div className="form_control">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInput}
                    />
                </div>
                <button className="btn-submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginContext;
