import React from 'react';
import { User, Home, Phone, Mail, Shield, LogOut } from 'lucide-react';

const profileSections = [
  {
    title: 'Personal Information',
    items: [
      { icon: User, label: 'John Doe', sublabel: 'Resident' },
      { icon: Home, label: 'A-123, Green Valley Apartments', sublabel: 'Address' },
      { icon: Phone, label: '+91 98765 43210', sublabel: 'Phone' },
      { icon: Mail, label: 'john.doe@example.com', sublabel: 'Email' }
    ]
  },
  {
    title: 'Security',
    items: [
      { icon: Shield, label: 'Change Password', action: true },
      { icon: LogOut, label: 'Logout', action: true, danger: true }
    ]
  }
];

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="h-10 w-10 text-gray-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600">Green Valley Apartments</p>
        </div>
      </div>

      <div className="space-y-8">
        {profileSections.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex items-center justify-between p-4 bg-white rounded-xl shadow-sm ${
                    item.action ? 'cursor-pointer hover:bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full bg-gray-100 ${
                      item.danger ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={`font-medium ${
                        item.danger ? 'text-red-600' : 'text-gray-900'
                      }`}>{item.label}</p>
                      {item.sublabel && (
                        <p className="text-sm text-gray-500">{item.sublabel}</p>
                      )}
                    </div>
                  </div>
                  {item.action && (
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}