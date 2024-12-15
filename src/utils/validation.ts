import { z } from 'zod';

export const phoneRegex = /^\+?[1-9]\d{9,14}$/;

export const visitorSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  phone: z.string()
    .regex(phoneRegex, 'Invalid phone number')
    .trim(),
  purpose: z.string()
    .min(3, 'Purpose must be at least 3 characters')
    .max(100, 'Purpose must be less than 100 characters')
    .trim(),
  expectedDuration: z.number()
    .min(1, 'Duration must be at least 1 hour')
    .max(24, 'Duration cannot exceed 24 hours'),
  vehicleNumber: z.string()
    .trim()
    .optional()
    .transform(val => val === '' ? undefined : val),
});