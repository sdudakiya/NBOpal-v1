import { useState, useEffect } from 'react';
import type { Activity } from '../types/activity';

// Mock data for production demo
const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    type: 'delivery',
    title: 'Package Arrived',
    description: 'Amazon delivery at security gate',
    timestamp: new Date(Date.now() - 120000), // 2 mins ago
  },
  {
    id: '2',
    type: 'visitor',
    title: 'Visitor Entry',
    description: 'John from Maintenance',
    timestamp: new Date(Date.now() - 900000), // 15 mins ago
  },
  {
    id: '3',
    type: 'notice',
    title: 'Society Notice',
    description: 'Monthly maintenance due',
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
  },
];

export function useActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setActivities(MOCK_ACTIVITIES);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch activities');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return { activities, isLoading, error, refetch: fetchActivities };
}