import React, { useRef, useCallback, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { sideBarListItems } from '../../constants/SideBarListItems';
import SideBarListItem from '../side_bar/SideBarListItem';

const HamburgerMenu: React.FC = () => {
    const isOpenRef = useRef(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLSpanElement>(null);

    const updateMenuState = useCallback(() => {
        if (menuRef.current && overlayRef.current && iconRef.current) {
            if (isOpenRef.current) {
                menuRef.current.style.transform = 'translateX(0)';
                overlayRef.current.style.opacity = '0.5';
                overlayRef.current.style.pointerEvents = 'auto';
                //iconRef.current.innerHTML = '<IoClose />';
            } else {
                menuRef.current.style.transform = 'translateX(-100%)';
                overlayRef.current.style.opacity = '0';
                overlayRef.current.style.pointerEvents = 'none';
                //iconRef.current.innerHTML = '<FaBars />';
            }
        }
    }, []);

    const toggleMenu = useCallback(() => {
        isOpenRef.current = !isOpenRef.current;
        updateMenuState();
    }, [updateMenuState]);

    useEffect(() => {
        // Initial setup
        updateMenuState();
    }, [updateMenuState]);

    return (
        <>
            <button onClick={toggleMenu} className="text-3xl focus:outline-none p-5">
                <span ref={iconRef}>
                    <FaBars />
                </span>
            </button>

            <div
                ref={overlayRef}
                className="fixed top-0 left-0 inset-0 bg-black z-40 transform-gpu transition-opacity ease-in opacity-0 pointer-events-none"
                onClick={toggleMenu}
                style={{
                    willChange: 'opacity',
                    backfaceVisibility: 'hidden',
                }}
            />

            <div
                ref={menuRef}
                className="fixed left-0 w-64 h-full bg-gray-100 z-50 transition-transform rounded-r-2xl ease-in"
                style={{
                    transform: 'translateX(-100%)',
                    transition: 'transform 150ms ease-in',
                    willChange: 'transform',
                    opacity: 0.99,
                    backfaceVisibility: 'hidden',
                }}
            >
                <ul className="flex flex-col p-4 pt-16">
                    {sideBarListItems.map((item, index) => (
                        <SideBarListItem to={item.to} label={item.label} icon={item.icon} key={index} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;