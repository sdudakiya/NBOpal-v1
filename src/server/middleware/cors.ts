import cors from 'cors';

export const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3006',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
});