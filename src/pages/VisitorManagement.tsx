import React from 'react';
import { format } from 'date-fns';
import VisitorForm from '../components/visitors/VisitorForm';
import VisitorList from '../components/visitors/VisitorList';
import { useVisitors } from '../hooks/visitor/useVisitors';
import { Loader, AlertCircle } from 'lucide-react';
import type { Visitor } from '../types/visitor';

export default function VisitorManagement() {
  const { visitors, isLoading, error, checkIn, checkOut } = useVisitors();

  const handleCheckIn = async (data: Visitor) => {
    try {
      await checkIn(data);
    } catch (error) {
      throw new Error('Failed to check in visitor. Please try again.');
    }
  };

  const handleCheckOut = async (visitorId: string) => {
    try {
      await checkOut(visitorId);
    } catch (error) {
      console.error('Failed to check out visitor:', error);
      // Show error toast or message to user
    }
  };

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <h2 className="text-red-800 font-medium">Error</h2>
          </div>
          <p className="text-red-600 mt-1">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Visitor Management</h1>
        <p className="text-gray-600">
          {format(new Date(), 'EEEE, MMMM d, yyyy')}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">New Visitor Check-in</h2>
        <VisitorForm onSubmit={handleCheckIn} isLoading={isLoading} />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Today's Visitors</h2>
        {isLoading && visitors.length === 0 ? (
          <div className="flex justify-center p-8">
            <Loader className="h-6 w-6 text-blue-600 animate-spin" />
          </div>
        ) : (
          <VisitorList 
            visitors={visitors} 
            onCheckOut={handleCheckOut} 
          />
        )}
      </div>
    </div>
  );
}