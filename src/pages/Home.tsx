// Home.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLoaderData } from 'react-router-dom';
import { SaleHistory } from '../models/SaleHistory';
import SalesReportListItem from '../components/sales_report/salesReportListItem';

const Home: React.FC = () => {
  const auth = useAuth();
  const saleHistoryData: SaleHistory[] = useLoaderData() as SaleHistory[];
  console.log(saleHistoryData);
  // Assuming `auth.user` has `name` and `avatarUrl` properties
  const { name, profilePicture} = auth?.user || { name: 'Guest', profiePicture: 'default_avatar_url' };

  return (
    <div className="p-4">
      <div className="flex items-center">
        <img src={profilePicture} alt="Avatar" className="w-14 h-14 rounded-full mr-4" />
        <p className="text-xl">Welcome, <span className="font-semibold">{name}</span>!</p>
      </div>
      <p className='mb-8'>Welcome to the home page!</p>
      {
        saleHistoryData.map((sale) => (
          <SalesReportListItem key={sale.id} sale={sale} />
        ))
      }
    </div>
  );
};

export default Home;