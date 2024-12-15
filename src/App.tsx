import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentsPage';
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage';
import VisitorManagement from './pages/VisitorManagement';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16 pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/visitors" element={<VisitorManagement />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;