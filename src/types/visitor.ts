import { z } from 'zod';

export const VisitorSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number'),
  purpose: z.string().min(3, 'Purpose must be at least 3 characters'),
  expectedDuration: z.number().min(1, 'Duration must be at least 1 hour'),
  vehicleNumber: z.string().optional(),
});

export type Visitor = z.infer<typeof VisitorSchema>;

export type VisitorWithStatus = Visitor & {
  id: string;
  checkInTime: Date;
  status: 'checked-in' | 'checked-out';
  checkOutTime?: Date;
};