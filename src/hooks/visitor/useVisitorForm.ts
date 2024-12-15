import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { visitorSchema } from '../../utils/validation';
import type { Visitor } from '../../types/visitor';

interface UseVisitorFormProps {
  onSubmit: (data: Visitor) => Promise<void>;
}

export function useVisitorForm({ onSubmit }: UseVisitorFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const form = useForm<Visitor>({
    resolver: zodResolver(visitorSchema),
    defaultValues: {
      expectedDuration: 1
    }
  });

  const handleSubmit = async (data: Visitor) => {
    try {
      setSubmitError(null);
      await onSubmit(data);
      form.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
      console.error('Form submission failed:', error);
    }
  };

  return {
    form,
    submitError,
    handleSubmit: form.handleSubmit(handleSubmit)
  };
}