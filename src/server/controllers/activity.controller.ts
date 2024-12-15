import { Request, Response } from 'express';
import { ActivityService } from '../services/activity.service';

const activityService = new ActivityService();

export const getActivities = async (_req: Request, res: Response) => {
  const activities = await activityService.getAll();
  res.json(activities);
};