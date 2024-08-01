import React from 'react';
import { Outlet } from "react-router-dom";

import SideBar from './components/side_bar/SideBar';
import HamburgerMenu from './components/hamburger_menu/HamburgerMenu';
const App: React.FC = () => {
    return (
        <>
            <SideBar />
            <div className='md:hidden'>
                <HamburgerMenu />
            </div>

            <div className="md:ml-64 p-4 md:p-4"> {/* ml-64 eklenmiş, Drawer'ın genişliğine uygun */}
            </div>
        </>
    );
}

export default App;
