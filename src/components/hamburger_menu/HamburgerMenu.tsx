// src/components/HamburgerMenu.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative md:hidden">
            <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                {isOpen ? <IoClose /> : <FaBars />}
            </button>
            {isOpen && (
                <div className="absolute top-20 left-0 w-64 h-screen bg-white shadow-lg">
                    <ul className="flex flex-col p-4">
                        <li className="py-2"><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li className="py-2"><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                        <li className="py-2"><Link to="/settings" onClick={toggleMenu}>Settings</Link></li>
                        <li className="py-2"><Link to="/logout" onClick={toggleMenu}>Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
