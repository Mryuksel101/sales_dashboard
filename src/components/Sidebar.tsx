import React from 'react';
import '../styles/Sidebar.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 fixed h-full">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:bg-gray-700 p-2 rounded-xl block  ${isActive ? 'bg-gray-700' : ''}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:bg-gray-700 p-2 rounded block ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:bg-gray-700 p-2 rounded block ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
