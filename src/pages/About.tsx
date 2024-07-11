// About.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const About: React.FC = () => {
  const auth = useAuth(); // Destructure signOut from useAuth

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <button onClick={()=>auth?.signout()}>Sign Out</button> {/* Add a button to sign out */}
    </div>
  );
}

export default About;
