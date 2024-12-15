import React from 'react';
import SecurityCard from '../components/SecurityCard';
import QuickActions from '../components/QuickActions';
import ActivityFeed from '../components/ActivityFeed';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
          <p className="text-gray-600">NB Opal Apartments</p>
        </div>
        <button
          onClick={() => navigate('/visitors')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <UserPlus className="h-5 w-5" />
          <span>Check In Visitor</span>
        </button>
      </div>
      <SecurityCard />
      <QuickActions />
      <ActivityFeed />
    </div>
  );
}