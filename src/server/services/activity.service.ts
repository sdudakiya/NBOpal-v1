import type { Activity } from '../../types/activity';

export class ActivityService {
  private activities: Activity[] = [];

  async addActivity(activity: Omit<Activity, 'id' | 'timestamp'>): Promise<Activity> {
    const newActivity: Activity = {
      ...activity,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };
    
    this.activities.unshift(newActivity);
    return newActivity;
  }

  async getAll(): Promise<Activity[]> {
    return this.activities;
  }
}