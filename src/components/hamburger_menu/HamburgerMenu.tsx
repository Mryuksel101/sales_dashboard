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
        <>
            <button onClick={toggleMenu} className="text-3xl focus:outline-none p-5">
                {isOpen ? <IoClose /> : <FaBars />}
            </button>

            {/* <div
                className={`fixed top-0 left-0 w-full h-full bg-black z-40 transition-opacity duration-500 ease-in-out transform ${isOpen ? 'opacity-50 block' : 'opacity-0 hidden'
                    }`}
                onClick={toggleMenu}>
            </div> */}

            <div
                className={`fixed top-0 left-0 inset-0  bg-black z-40 transform-gpu transition-opacity ease-in ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={
                    toggleMenu
                }
                style={{
                    willChange: 'opacity',
                    backfaceVisibility: 'hidden',
                }}

            >
            </div>

            <div
                className={`left-0 w-64 h-full bg-gray-100 z-50 transition-transform rounded-r-2xl ease-in
                    }`}
                style={{
                    position: 'fixed',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 150ms ease-in', // transition-transform and ease-in
                    willChange: 'transform',
                    opacity: 0.99,
                    backfaceVisibility: 'hidden',
                }}
            >
                <ul className="flex flex-col p-4 pt-16">

                    {
                        sideBarListItems.map((item, index) => {
                            return <SideBarListItem to={item.to} label={item.label} icon={item.icon} key={index} />
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;