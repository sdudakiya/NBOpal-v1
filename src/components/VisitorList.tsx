import React from 'react';
import { format } from 'date-fns';
import { User, Clock, LogOut } from 'lucide-react';
import type { VisitorWithStatus } from '../types/visitor';

interface VisitorListProps {
  visitors: VisitorWithStatus[];
  onCheckOut: (visitorId: string) => void;
}

export default function VisitorList({ visitors, onCheckOut }: VisitorListProps) {
  return (
    <div className="space-y-4">
      {visitors.map((visitor) => (
        <div
          key={visitor.id}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
        >
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{visitor.name}</h3>
              <p className="text-sm text-gray-500">{visitor.purpose}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {format(new Date(visitor.checkInTime), 'h:mm a')}
                </span>
              </div>
            </div>
          </div>
          
          {visitor.status === 'checked-in' && (
            <button
              onClick={() => onCheckOut(visitor.id)}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Check Out</span>
            </button>
          )}
          
          {visitor.status === 'checked-out' && (
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
              Checked Out at {format(new Date(visitor.checkOutTime!), 'h:mm a')}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}