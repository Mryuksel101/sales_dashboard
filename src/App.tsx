import React from 'react';
import {Outlet} from "react-router-dom";

import SideBar from './components/side_bar/SideBar';
const App: React.FC = () => {
    return (
        <>
            <SideBar />
            <div className="p-4 ml-64"> {/* ml-64 eklenmiş, Drawer'ın genişliğine uygun */}
                <Outlet />
            </div>
        </>
    );
}

export default App;
