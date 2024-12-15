import { API_CONFIG } from '../utils/config';

interface ApiError extends Error {
  status?: number;
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      const error: ApiError = new Error(`HTTP error! status: ${response.status}`);
      error.status = response.status;
      throw error;
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('Unknown API error occurred');
  }
}

export const api = {
  get: <T>(endpoint: string) => fetchApi<T>(endpoint),
  
  post: <T>(endpoint: string, data: unknown) => 
    fetchApi<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  put: <T>(endpoint: string, data: unknown) =>
    fetchApi<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: <T>(endpoint: string) =>
    fetchApi<T>(endpoint, {
      method: 'DELETE',
    }),
};