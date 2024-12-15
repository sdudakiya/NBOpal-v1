import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  className?: string;
}

export default function ErrorAlert({ message, className = '' }: ErrorAlertProps) {
  return (
    <div className={`p-3 rounded-lg bg-red-50 border border-red-200 ${className}`}>
      <div className="flex items-center space-x-2 text-red-600">
        <AlertCircle className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}