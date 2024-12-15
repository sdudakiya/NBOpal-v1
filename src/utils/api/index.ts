import { ApiClient } from './client';
import { API_ROUTES } from '../constants';

export const api = new ApiClient({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000'
});