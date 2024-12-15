import React from 'react';
import { Loader } from 'lucide-react';
import { useActivityFeed } from '../../hooks/useActivityFeed';
import ActivityItem from './ActivityItem';

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
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
        {activities.length === 0 && (
          <p className="text-center text-gray-500">No recent activities</p>
        )}
      </div>
    </div>
  );
}