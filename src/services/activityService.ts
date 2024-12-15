import { api } from './api';
import { API_CONFIG } from '../utils/config';
import type { Activity } from '../types/activity';

const { ACTIVITIES } = API_CONFIG.ENDPOINTS;

export const activityService = {
  getAll: () => api.get<Activity[]>(ACTIVITIES),
  
  create: (data: Omit<Activity, 'id' | 'timestamp'>) =>
    api.post<Activity>(ACTIVITIES, data),
};