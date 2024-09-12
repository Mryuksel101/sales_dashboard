import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { deleteCookie } from '../services/authService';

const SignOutButton: React.FC = () => {
    let navigate = useNavigate();
    let auth = useAuth();

    return <button
        onClick={() => {
            try {
                auth?.signout(() => {
                    deleteCookie('token');
                    navigate('/');
                });
            } catch (error) {
                console.error('Error signing out:', error);
            }
        }}
    >
        Sign Out
    </button>;
};

export default SignOutButton;
