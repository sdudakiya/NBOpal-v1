import { API_CONFIG } from './config';
import { ApiError, NetworkError, TimeoutError } from './errors';

interface RequestConfig extends RequestInit {
  timeout?: number;
}

async function timeoutPromise(promise: Promise<Response>, ms: number): Promise<Response> {
  let timeoutId: NodeJS.Timeout;
  
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new TimeoutError());
    }, ms);
  });

  try {
    const result = await Promise.race([promise, timeoutPromise]);
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const { timeout = API_CONFIG.TIMEOUT, ...requestConfig } = config;
  
  try {
    const response = await timeoutPromise(
      fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        headers: API_CONFIG.HEADERS,
        ...requestConfig,
      }),
      timeout
    );

    if (!response.ok) {
      throw new ApiError(
        response.statusText || 'Request failed',
        response.status
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new NetworkError();
    }
    throw new ApiError('An unexpected error occurred');
  }
}

export const apiClient = {
  get: <T>(endpoint: string, config?: RequestConfig) => 
    request<T>(endpoint, { method: 'GET', ...config }),
    
  post: <T>(endpoint: string, data?: unknown, config?: RequestConfig) =>
    request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    }),
    
  put: <T>(endpoint: string, data?: unknown, config?: RequestConfig) =>
    request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    }),
    
  delete: <T>(endpoint: string, config?: RequestConfig) =>
    request<T>(endpoint, { method: 'DELETE', ...config }),
};