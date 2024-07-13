import React from 'react';
import {sideBarListItems} from '../../constants/SideBarListItems';
import SideBarListItem from './SideBarListItem';

const SideBar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 fixed h-full bg-white">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        {
          sideBarListItems.map((item, index) => {
            return <SideBarListItem to={item.to} label={item.label} icon={item.icon} key={index}/>
          })  
        }
      </ul>
    </div>
  );
};

export default SideBar;
