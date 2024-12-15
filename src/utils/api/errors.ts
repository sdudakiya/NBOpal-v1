export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends ApiError {
  constructor(message = 'Network error occurred') {
    super(message);
    this.name = 'NetworkError';
  }
}

export class TimeoutError extends ApiError {
  constructor(message = 'Request timed out') {
    super(message);
    this.name = 'TimeoutError';
  }
}