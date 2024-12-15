import { useState, useEffect } from 'react';
import { visitorService } from '../services/visitorService';
import type { Visitor, VisitorWithStatus } from '../types/visitor';

export function useVisitors() {
  const [visitors, setVisitors] = useState<VisitorWithStatus[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVisitors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await visitorService.getAll();
      setVisitors(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load visitors';
      setError(message);
      console.error('Failed to load visitors:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const checkIn = async (data: Visitor) => {
    setIsLoading(true);
    setError(null);
    try {
      const newVisitor = await visitorService.checkIn(data);
      setVisitors(prev => [newVisitor, ...prev]);
      return newVisitor;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to check in visitor';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const checkOut = async (visitorId: string) => {
    setError(null);
    try {
      const updatedVisitor = await visitorService.checkOut(visitorId);
      setVisitors(prev =>
        prev.map(visitor =>
          visitor.id === visitorId ? updatedVisitor : visitor
        )
      );
      return updatedVisitor;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to check out visitor';
      setError(message);
      throw new Error(message);
    }
  };

  useEffect(() => {
    loadVisitors();
  }, []);

  return {
    visitors,
    isLoading,
    error,
    checkIn,
    checkOut,
    refresh: loadVisitors
  };
}