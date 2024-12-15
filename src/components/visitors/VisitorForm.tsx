import React from 'react';
import { useVisitorForm } from '../../hooks/visitor/useVisitorForm';
import VisitorFormFields from './VisitorFormFields';
import VisitorFormButton from './VisitorFormButton';
import ErrorAlert from '../common/ErrorAlert';
import type { Visitor } from '../../types/visitor';

interface VisitorFormProps {
  onSubmit: (data: Visitor) => Promise<void>;
  isLoading?: boolean;
}

export default function VisitorForm({ onSubmit, isLoading }: VisitorFormProps) {
  const { form, submitError, handleSubmit } = useVisitorForm({ onSubmit });
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <ErrorAlert message={submitError} />
      )}
      
      <VisitorFormFields 
        register={form.register} 
        errors={form.formState.errors} 
      />
      
      <VisitorFormButton isLoading={isLoading || false} />
    </form>
  );
}