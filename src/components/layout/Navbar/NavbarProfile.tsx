import React from 'react';
import { User } from 'lucide-react';

export default function NavbarProfile() {
  return (
    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
      <User className="h-5 w-5 text-gray-600" />
    </div>
  );
}