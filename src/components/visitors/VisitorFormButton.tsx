import React from 'react';
import LoadingSpinner from '../common/LoadingSpinner';

interface VisitorFormButtonProps {
  isLoading: boolean;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

export default function VisitorFormButton({ 
  isLoading, 
  type = 'submit',
  onClick 
}: VisitorFormButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" className="mr-2" />
          <span>Processing...</span>
        </>
      ) : (
        'Check In Visitor'
      )}
    </button>
  );
}