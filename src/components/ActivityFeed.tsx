import React from 'react';
import { Package, User, Bell, Loader } from 'lucide-react';
import { useActivityFeed } from '../hooks/useActivityFeed';
import { formatDistanceToNow } from 'date-fns';

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'delivery':
      return { icon: Package, color: 'bg-purple-100 text-purple-600' };
    case 'visitor':
      return { icon: User, color: 'bg-blue-100 text-blue-600' };
    case 'notice':
      return { icon: Bell, color: 'bg-yellow-100 text-yellow-600' };
    default:
      return { icon: Bell, color: 'bg-gray-100 text-gray-600' };
  }
};

export default function ActivityFeed() {
  const { activities, isLoading, error } = useActivityFeed();

  if (isLoading) {
    return (
      <div className="p-4 flex justify-center">
        <Loader className="h-6 w-6 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Failed to load activities
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const { icon: Icon, color } = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm"
            >
              <div className={`p-2 rounded-full ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <span className="text-xs text-gray-400">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </span>
              </div>
            </div>
          );
        })}
        {activities.length === 0 && (
          <p className="text-center text-gray-500">No recent activities</p>
        )}
      </div>
    </div>
  );
}