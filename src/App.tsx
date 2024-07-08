import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="p-4 ml-64"> {/* ml-64 eklenmiş, Drawer'ın genişliğine uygun */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
