import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Outlet, Link } from "react-router-dom";

import SideBar from './components/side_bar/SideBar';
const App: React.FC = () => {
    return (
        <AuthProvider>
            <SideBar />
            <div className="p-4 ml-64"> {/* ml-64 eklenmiş, Drawer'ın genişliğine uygun */}
                <Outlet />
            </div>
        </AuthProvider>
    );
}

export default App;
