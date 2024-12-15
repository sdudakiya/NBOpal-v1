import { useState, useCallback } from 'react';
import { ApiError, NetworkError, TimeoutError } from '../../utils/api/errors';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  initialData?: T;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof NetworkError) {
    return 'Unable to connect to the server. Please check your internet connection.';
  }
  if (error instanceof TimeoutError) {
    return 'The request took too long to complete. Please try again.';
  }
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

export function useApi<T, P = unknown>(
  apiFunction: (params: P) => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(options.initialData ?? null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (params: P) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await apiFunction(params);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = new Error(getErrorMessage(err));
      setError(error);
      options.onError?.(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [apiFunction, options]);

  return {
    data,
    isLoading,
    error,
    execute,
    reset: () => {
      setData(options.initialData ?? null);
      setError(null);
    }
  };
}