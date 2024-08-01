import React from 'react';

import SideBar from './components/side_bar/SideBar';
import HamburgerMenu from './components/hamburger_menu/HamburgerMenu';
import { Outlet } from 'react-router-dom';
const App: React.FC = () => {
    return (
        <>
            <SideBar />
            <div className='md:hidden'>
                <HamburgerMenu />
            </div>
            <div className="md:ml-64 p-4 md:p-4"> {/* ml-64 eklenmiş, Drawer'ın genişliğine uygun */}
                <Outlet />
            </div>
        </>
    );
}

export default App;
