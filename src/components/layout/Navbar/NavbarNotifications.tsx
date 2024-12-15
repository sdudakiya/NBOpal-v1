import React from 'react';
import { Bell } from 'lucide-react';

export default function NavbarNotifications() {
  return (
    <button className="relative" aria-label="Notifications">
      <Bell className="h-6 w-6 text-gray-600" />
    </button>
  );
}