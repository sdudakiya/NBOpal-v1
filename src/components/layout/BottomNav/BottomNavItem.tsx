import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BottomNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function BottomNavItem({ icon: Icon, label, isActive, onClick }: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 ${
        isActive ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </button>
  );
}