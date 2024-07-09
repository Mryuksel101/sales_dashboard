import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn: React.FC = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: '/' } };
    let [username, setUsername] = useState('');

    let login = (e: React.FormEvent) => {
        e.preventDefault();
        auth?.signin(username, () => {
            navigate(from);
        });
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
