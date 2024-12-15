import express from 'express';
import cors from 'cors';
import path from 'path';
import { visitorRouter } from './routes/visitor.routes';
import { activityRouter } from './routes/activity.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3006',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api/visitors', visitorRouter);
app.use('/api/activities', activityRouter);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));
  
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
}

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at http://localhost:${port}/api`);
});