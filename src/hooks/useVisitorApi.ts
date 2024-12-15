import { useState } from 'react';
import { api } from '../utils/api';
import type { Visitor, VisitorWithStatus } from '../types/visitor';

export function useVisitorApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkIn = async (visitorData: Visitor) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newVisitor = await api.visitors.checkIn(visitorData);
      return newVisitor;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to check in visitor';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const checkOut = async (visitorId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedVisitor = await api.visitors.checkOut(visitorId);
      return updatedVisitor;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to check out visitor';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getVisitors = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const visitors = await api.visitors.getAll();
      return visitors;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch visitors';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkIn,
    checkOut,
    getVisitors,
    isLoading,
    error
  };
}