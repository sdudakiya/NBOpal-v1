import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { UserPlus, Clock, Car, Phone, FileText } from 'lucide-react';
import type { Visitor } from '../../types/visitor';

interface FormFieldProps {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function FormField({ label, error, icon, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        {children}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

interface VisitorFormFieldsProps {
  register: UseFormRegister<Visitor>;
  errors: FieldErrors<Visitor>;
}

export default function VisitorFormFields({ register, errors }: VisitorFormFieldsProps) {
  return (
    <>
      <FormField
        label="Visitor Name"
        error={errors.name?.message}
        icon={<UserPlus className="h-5 w-5 text-gray-400" />}
      >
        <input
          {...register('name')}
          type="text"
          className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter visitor name"
        />
      </FormField>

      <FormField
        label="Phone Number"
        error={errors.phone?.message}
        icon={<Phone className="h-5 w-5 text-gray-400" />}
      >
        <input
          {...register('phone')}
          type="tel"
          className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="+91 98765 43210"
        />
      </FormField>

      <FormField
        label="Purpose of Visit"
        error={errors.purpose?.message}
        icon={<FileText className="h-5 w-5 text-gray-400" />}
      >
        <input
          {...register('purpose')}
          type="text"
          className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Maintenance, Delivery"
        />
      </FormField>

      <FormField
        label="Expected Duration (hours)"
        error={errors.expectedDuration?.message}
        icon={<Clock className="h-5 w-5 text-gray-400" />}
      >
        <input
          {...register('expectedDuration', { valueAsNumber: true })}
          type="number"
          min="1"
          className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="2"
        />
      </FormField>

      <FormField
        label="Vehicle Number (optional)"
        error={errors.vehicleNumber?.message}
        icon={<Car className="h-5 w-5 text-gray-400" />}
      >
        <input
          {...register('vehicleNumber')}
          type="text"
          className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., KA01AB1234"
        />
      </FormField>
    </>
  );
}