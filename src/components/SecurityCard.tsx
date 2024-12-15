import React from 'react';
import { Shield, Phone } from 'lucide-react';

export default function SecurityCard() {
  return (
    <div className="mx-4 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <h2 className="text-lg font-semibold">Security</h2>
        </div>
        <button className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
          <Phone className="h-4 w-4" />
          <span className="text-sm">Call</span>
        </button>
      </div>
      <p className="text-sm text-white/80">
        Contact security for emergencies or assistance
      </p>
    </div>
  );
}