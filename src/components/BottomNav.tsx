import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Wallet, Settings, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Wallet, label: 'Payments', path: '/payments' },
  { icon: Settings, label: 'Services', path: '/services' },
  { icon: User, label: 'Profile', path: '/profile' }
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around py-3">
          {navItems.map(({ icon: Icon, label, path }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center space-y-1 ${
                location.pathname === path ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}