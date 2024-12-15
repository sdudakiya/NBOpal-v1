export const VISITOR_ENDPOINTS = {
  BASE: '/visitors',
  CHECK_IN: '/visitors/check-in',
  CHECK_OUT: (id: string) => `/visitors/check-out/${id}`,
} as const;