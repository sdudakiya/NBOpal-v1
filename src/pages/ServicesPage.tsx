import React from 'react';
import { Car, Utensils, Wrench, Users, Dumbbell, Waves } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Car,
    title: 'Daily Help',
    description: 'Manage your domestic help access',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    icon: Utensils,
    title: 'Food Delivery',
    description: 'Manage delivery access',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 3,
    icon: Wrench,
    title: 'Maintenance',
    description: 'Request repairs and maintenance',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 4,
    icon: Users,
    title: 'Visitor Management',
    description: 'Pre-approve and manage visitors',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 5,
    icon: Dumbbell,
    title: 'Gym Booking',
    description: 'Book gym slots',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 6,
    icon: Waves,
    title: 'Pool Access',
    description: 'Manage pool access passes',
    color: 'bg-cyan-100 text-cyan-600'
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(service => (
          <button
            key={service.id}
            className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm transition-transform hover:scale-102"
          >
            <div className={`p-3 rounded-full ${service.color}`}>
              <service.icon className="h-6 w-6" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}