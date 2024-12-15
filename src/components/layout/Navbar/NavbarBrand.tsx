import React from 'react';
import { Menu } from 'lucide-react';

export default function NavbarBrand() {
  return (
    <div className="flex items-center">
      <Menu className="h-6 w-6 text-gray-600" />
      <span className="ml-3 text-xl font-bold text-blue-600">MyGate</span>
    </div>
  );
}