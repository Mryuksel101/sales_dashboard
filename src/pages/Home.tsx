// Home.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import SaleHistoryDataGrid from '../components/SaleHistoryDataGrid';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  const auth = useAuth();
  // Assuming `auth.user` has `name` and `avatarUrl` properties
  const { name, profilePicture } = auth?.user || { name: 'Guest', profiePicture: 'default_avatar_url' };

  return (
    <div>
      <Outlet />
      <div className="flex items-center flex-none">
        <img src={profilePicture} alt="Avatar" className="w-1,4 h-14 rounded-full mr-4" />
        <p className="text-xl">Welcome, <span className="font-semibold">{name}</span>!</p>
      </div>
      <p className='mb-8 mt-1'>Welcome to the home page!</p>
      <SaleHistoryDataGrid />
    </div>
  );
};

export default Home;