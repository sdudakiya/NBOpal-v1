import React from 'react';
import { UserPlus, Car, Package, Calendar, Shield, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: UserPlus, label: 'Check In', path: '/visitors', color: 'bg-blue-100 text-blue-600' },
  { icon: Car, label: 'Daily Help', path: '/services', color: 'bg-green-100 text-green-600' },
  { icon: Package, label: 'Delivery', path: '/services', color: 'bg-purple-100 text-purple-600' },
  { icon: Calendar, label: 'Amenities', path: '/services', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Shield, label: 'Security', path: '/services', color: 'bg-red-100 text-red-600' },
  { icon: Megaphone, label: 'Notice', path: '/services', color: 'bg-indigo-100 text-indigo-600' },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {actions.map(({ icon: Icon, label, path, color }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className="flex flex-col items-center p-4 rounded-xl transition-transform hover:scale-105"
        >
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}