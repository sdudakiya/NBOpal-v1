import { Package, User, Bell } from 'lucide-react';

export type ActivityType = 'delivery' | 'visitor' | 'notice';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: Date;
}