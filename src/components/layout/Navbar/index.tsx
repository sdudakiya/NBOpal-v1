import React from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarNotifications from './NavbarNotifications';
import NavbarProfile from './NavbarProfile';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavbarBrand />
          <div className="flex items-center space-x-4">
            <NavbarNotifications />
            <NavbarProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}