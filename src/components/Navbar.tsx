import React from 'react';
import { Bell, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600" />
            <span className="ml-3 text-xl font-bold text-blue-600">MyGate</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}