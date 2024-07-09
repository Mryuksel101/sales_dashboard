import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignOutButton: React.FC = () => {
    let navigate = useNavigate();
    let auth = useAuth();

    return auth?.user ? (
        <button
            onClick={() => {
                auth.signout(() => navigate('/'));
            }}
        >
            Sign Out
        </button>
    ) : (
        <p>You are not logged in.</p>
    );
};

export default SignOutButton;
