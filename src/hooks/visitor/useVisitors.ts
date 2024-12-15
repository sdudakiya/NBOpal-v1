import { useState, useEffect } from 'react';
import { visitorService } from '../../services/visitor/visitor.service';
import { useApi } from '../api/useApi';
import type { Visitor, VisitorWithStatus } from '../../types/visitor';

export function useVisitors() {
  const [visitors, setVisitors] = useState<VisitorWithStatus[]>([]);
  
  const {
    execute: fetchVisitors,
    isLoading: isLoadingVisitors,
    error: fetchError
  } = useApi(visitorService.getAll, {
    onError: (error) => {
      console.error('Failed to fetch visitors:', error);
    }
  });

  const {
    execute: performCheckIn,
    isLoading: isCheckingIn
  } = useApi(visitorService.checkIn, {
    onSuccess: (newVisitor) => {
      setVisitors(prev => [newVisitor, ...prev]);
    },
    onError: (error) => {
      console.error('Failed to check in visitor:', error);
    }
  });

  const {
    execute: performCheckOut,
    isLoading: isCheckingOut
  } = useApi(visitorService.checkOut, {
    onSuccess: (updatedVisitor) => {
      setVisitors(prev =>
        prev.map(visitor =>
          visitor.id === updatedVisitor.id ? updatedVisitor : visitor
        )
      );
    },
    onError: (error) => {
      console.error('Failed to check out visitor:', error);
    }
  });

  useEffect(() => {
    loadVisitors();
  }, []);

  const loadVisitors = async () => {
    try {
      const data = await fetchVisitors();
      setVisitors(data);
    } catch (error) {
      // Error is already handled by useApi hook
    }
  };

  return {
    visitors,
    isLoading: isLoadingVisitors || isCheckingIn || isCheckingOut,
    error: fetchError,
    checkIn: performCheckIn,
    checkOut: performCheckOut,
    refresh: loadVisitors
  };
}