import { format, formatDistanceToNow } from 'date-fns';

export function formatDate(date: Date | string): string {
  return format(new Date(date), 'MMMM d, yyyy');
}

export function formatTime(date: Date | string): string {
  return format(new Date(date), 'h:mm a');
}

export function formatRelativeTime(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}