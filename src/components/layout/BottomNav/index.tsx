import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Wallet, Settings, User } from 'lucide-react';
import BottomNavItem from './BottomNavItem';

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
          {navItems.map(({ icon, label, path }) => (
            <BottomNavItem
              key={path}
              icon={icon}
              label={label}
              isActive={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}