import React, { useState, useMemo } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { sideBarListItems } from '../../constants/SideBarListItems';
import SideBarListItem from '../side_bar/SideBarListItem';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const memoizedItems = useMemo(() => {
        return sideBarListItems.map((item, index) => (
            <SideBarListItem to={item.to} label={item.label} icon={item.icon} key={index} />
        ));
    }, []);

    return (
        <>
            <button onClick={toggleMenu} className="text-3xl focus:outline-none p-5">
                {isOpen ? <IoClose /> : <FaBars />}
            </button>

            <div
                className={`fixed top-0 left-0 inset-0 bg-black transition-opacity ease-in-out duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
                style={{
                    backfaceVisibility: 'hidden',
                    zIndex: 150,
                }}
            ></div>

            <div
                className={`fixed left-0 top-0 w-64 h-full bg-gray-100 rounded-r-2xl ease-in-out duration-300`}
                style={{
                    transform: isOpen ? 'scale(1)' : 'scale(0)',
                    transformOrigin: 'left center',
                    transition: 'transform 300ms ease-in-out',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    zIndex: 160,
                }}
            >
                <ul className="flex flex-col p-4 pt-16">
                    {memoizedItems}
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;
