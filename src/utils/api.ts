import type { Visitor, VisitorWithStatus } from '../types/visitor';
import type { Activity } from '../types/activity';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  visitors: {
    checkIn: (data: Visitor) => 
      fetchApi<VisitorWithStatus>('/visitors/check-in', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    checkOut: (id: string) =>
      fetchApi<VisitorWithStatus>(`/visitors/check-out/${id}`, {
        method: 'POST',
      }),
    getAll: () => fetchApi<VisitorWithStatus[]>('/visitors'),
  },
  activities: {
    getAll: () => fetchApi<Activity[]>('/activities'),
  },
};