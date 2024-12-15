import { api } from './api';
import { API_CONFIG } from '../utils/config';
import type { Visitor, VisitorWithStatus } from '../types/visitor';

const { VISITORS } = API_CONFIG.ENDPOINTS;

export const visitorService = {
  checkIn: (data: Visitor) => 
    api.post<VisitorWithStatus>(`${VISITORS}/check-in`, data),

  checkOut: (id: string) =>
    api.post<VisitorWithStatus>(`${VISITORS}/check-out/${id}`, {}),

  getAll: () => 
    api.get<VisitorWithStatus[]>(VISITORS),
};