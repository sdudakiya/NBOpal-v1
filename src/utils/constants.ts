export const API_ROUTES = {
  BASE: '/api',
  VISITORS: '/api/visitors',
  ACTIVITIES: '/api/activities',
  HEALTH: '/api/health'
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
} as const;

export const ERROR_MESSAGES = {
  NETWORK: 'Network error occurred. Please check your connection.',
  SERVER: 'Server error occurred. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION: 'Invalid data provided.'
} as const;