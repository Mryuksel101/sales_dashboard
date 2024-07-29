import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { sideBarListItems } from '../../constants/SideBarListItems';
import SideBarListItem from '../side_bar/SideBarListItem';

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
                className={`fixed top-15 left-0 w-64 h-full bg-gray-100 shadow-lg z-50 transform-gpu duration-300 ease-in-out rounded-r-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ul className="flex flex-col p-4 pt-16">

                    {
                        sideBarListItems.map((item, index) => {
                            return <SideBarListItem to={item.to} label={item.label} icon={item.icon} key={index} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;