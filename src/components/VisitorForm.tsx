import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VisitorSchema, type Visitor } from '../types/visitor';
import { UserPlus, Clock, Car } from 'lucide-react';

interface VisitorFormProps {
  onSubmit: (data: Visitor) => void;
  isLoading?: boolean;
}

export default function VisitorForm({ onSubmit, isLoading }: VisitorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Visitor>({
    resolver: zodResolver(VisitorSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Visitor Name
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UserPlus className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('name')}
            type="text"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter visitor name"
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          {...register('phone')}
          type="tel"
          className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
          Purpose of Visit
        </label>
        <input
          {...register('purpose')}
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Maintenance, Delivery"
        />
        {errors.purpose && (
          <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="expectedDuration" className="block text-sm font-medium text-gray-700">
          Expected Duration (hours)
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('expectedDuration', { valueAsNumber: true })}
            type="number"
            min="1"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="2"
          />
        </div>
        {errors.expectedDuration && (
          <p className="mt-1 text-sm text-red-600">{errors.expectedDuration.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">
          Vehicle Number (optional)
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Car className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('vehicleNumber')}
            type="text"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., KA01AB1234"
          />
        </div>
        {errors.vehicleNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.vehicleNumber.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Check In Visitor'}
      </button>
    </form>
  );
}