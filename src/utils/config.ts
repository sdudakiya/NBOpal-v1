// API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    VISITORS: '/visitors',
    ACTIVITIES: '/activities',
    HEALTH: '/health'
  }
} as const;

// App configuration
export const APP_CONFIG = {
  NAME: 'MyGate',
  COMPANY: 'NB Opal',
  VERSION: '1.0.0'
} as const;