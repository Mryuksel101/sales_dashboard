// Home.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import OrdersDataGrid from '../components/ordersDataGrid';
import { Outlet } from 'react-router-dom';
import adminAvatar from '../assets/admin.png'; // Admin avatarını import et

const Home: React.FC = () => {
  const auth = useAuth();
  // Assuming `auth.user` has `name` and `avatarUrl` properties
  const { name, profilePicture } = auth?.user || { name: 'Guest', profiePicture: 'default_avatar_url' };

  return (
    <div>
      <Outlet />
      <div className="flex items-center flex-none">
        <img src={adminAvatar} alt="Admin avatar" className="w-12 h-12 mr-2" />
        <p className="text-xl">Hoş geldiniz, <span className="font-semibold">{name}</span>!</p>
      </div>
      <p className='mb-8 mt-1'>Ana sayfaya hoş geldiniz!</p>
      <OrdersDataGrid />
    </div>
  );
};

export default Home;