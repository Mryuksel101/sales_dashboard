// About.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import SignOutButton from '../components/SignOutButton';

const About: React.FC = () => {
  const auth = useAuth(); // Destructure signOut from useAuth
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <SignOutButton />
    </div>
  );
}

export default About;
