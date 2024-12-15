import { apiClient } from '../../utils/api/client';
import { VISITOR_ENDPOINTS } from './endpoints';
import type { Visitor, VisitorWithStatus } from '../../types/visitor';

export const visitorService = {
  checkIn: (data: Visitor) => 
    apiClient.post<VisitorWithStatus>(VISITOR_ENDPOINTS.CHECK_IN, data),

  checkOut: (id: string) =>
    apiClient.post<VisitorWithStatus>(VISITOR_ENDPOINTS.CHECK_OUT(id), {}),

  getAll: () => 
    apiClient.get<VisitorWithStatus[]>(VISITOR_ENDPOINTS.BASE),
};