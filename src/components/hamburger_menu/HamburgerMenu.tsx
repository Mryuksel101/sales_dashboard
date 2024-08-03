import React, { useState, useMemo } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { sideBarListItems } from '../../constants/SideBarListItems';
import SideBarListItem from '../side_bar/SideBarListItem';
import './Menu.css';

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
                className={`fixed top-0 left-0 inset-0 bg-black transform-cpu transition-opacity ease-in-out duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
                style={{
                    //willChange: 'opacity',
                    backfaceVisibility: 'hidden',
                    zIndex: 150,
                }}

            ></div>

            <div className={`menu`}>
                <div
                    className={`left-0 w-64 h-full bg-gray-100 rounded-r-2xl ease-in-out duration-300`}
                    style={{
                        position: 'fixed',
                        transform: isOpen ? ' translateX(0)' : ' translateX(-100%)',
                        transition: 'transform 300ms ease-in-out',
                        //willChange: 'transform',
                        opacity: 0.99,
                        backfaceVisibility: 'hidden',
                        perspective: '1000px',
                        zIndex: 160,
                    }}
                >
                    <ul className="flex flex-col p-4 pt-16">
                        {memoizedItems}
                    </ul>
                </div>
            </div>


        </>
    );
};

export default HamburgerMenu;
