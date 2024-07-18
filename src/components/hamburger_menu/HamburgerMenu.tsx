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
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl focus:outline-none p-5">
                {isOpen ? <IoClose /> : <FaBars />}
            </button>
            <div
                className={`fixed top-15 left-0 w-64 h-full bg-gray-100 shadow-lg z-50 transition-transform duration-300 ease-in-out transform rounded-r-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ul className="flex flex-col p-4 pt-16">
                    <li className="py-2"><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li className="py-2"><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                    <li className="py-2"><Link to="/settings" onClick={toggleMenu}>Settings</Link></li>
                    <li className="py-2"><Link to="/logout" onClick={toggleMenu}>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;