import { api } from '../../utils/api';
import { API_ROUTES } from '../../utils/constants';
import type { Activity } from '../../types/activity';

export const activityService = {
  getAll: () => 
    api.get<Activity[]>(API_ROUTES.ACTIVITIES),
  
  create: (data: Omit<Activity, 'id' | 'timestamp'>) =>
    api.post<Activity>(API_ROUTES.ACTIVITIES, data)
};