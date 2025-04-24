// Base URLs for API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Auth-related endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  ME: `${API_BASE_URL}/api/auth/me`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  LOGOUT_ALL: `${API_BASE_URL}/api/auth/logout-all`,
  GITHUB: `${API_BASE_URL}/api/auth/github`,
  PASSWORD_RESET_REQUEST: `${API_BASE_URL}/api/auth/password-reset/request`,
  PASSWORD_RESET: `${API_BASE_URL}/api/auth/password-reset/reset`,
  EMAIL_VERIFY: `${API_BASE_URL}/api/auth/email/verify`,
};
