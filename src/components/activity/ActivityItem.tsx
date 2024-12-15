import React from 'react';
import { Package, User, Bell, LucideIcon } from 'lucide-react';
import { formatRelativeTime } from '../../utils/date';
import type { Activity, ActivityType } from '../../types/activity';

const activityIcons: Record<ActivityType, { icon: LucideIcon; color: string }> = {
  delivery: { icon: Package, color: 'bg-purple-100 text-purple-600' },
  visitor: { icon: User, color: 'bg-blue-100 text-blue-600' },
  notice: { icon: Bell, color: 'bg-yellow-100 text-yellow-600' },
};

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  const { icon: Icon, color } = activityIcons[activity.type] || activityIcons.notice;

  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
      <div className={`p-2 rounded-full ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{activity.title}</h3>
        <p className="text-sm text-gray-500">{activity.description}</p>
        <span className="text-xs text-gray-400">
          {formatRelativeTime(activity.timestamp)}
        </span>
      </div>
    </div>
  );
}