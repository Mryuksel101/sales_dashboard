// Home.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLoaderData } from 'react-router-dom';

const Home: React.FC = () => {
  const auth = useAuth();
  const data = useLoaderData();
  // Assuming `auth.user` has `name` and `avatarUrl` properties
  const { name, profilePicture} = auth?.user || { name: 'Guest', profiePicture: 'default_avatar_url' };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="mt-4 flex items-center">
        <img src={profilePicture} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
        <p className="text-lg">Welcome, <span className="font-semibold">{name}</span>!</p>
      </div>
      <p>Welcome to the home page!</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Home;