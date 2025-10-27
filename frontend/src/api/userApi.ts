import axios, { AxiosError } from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 10000,
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('API Error:', error);
    
    // Create a more consistent error object
    const enhancedError = {
      ...error,
      message: 'Something went wrong. Please try again.',
    };

    // Network error
    if (!error.response) {
      enhancedError.message = 'Network error. Please check your connection.';
    }
    // Server error
    else if (error.response.status >= 500) {
      enhancedError.message = 'Server error. Please try again later.';
    }
    // Client error - handle nested message structure
    else if (error.response.status >= 400) {
      const responseData = error.response.data as any;
      
      // Handle nested message structure from your API
      if (responseData?.message?.message) {
        enhancedError.message = responseData.message.message;
      }
      // Handle direct message
      else if (responseData?.message && typeof responseData.message === 'string') {
        enhancedError.message = responseData.message;
      }
      // Fallback based on status code
      else if (error.response.status === 400) {
        enhancedError.message = 'Invalid request. Please check your input.';
      } else if (error.response.status === 409) {
        enhancedError.message = 'Email is already registered. Please use a different email.';
      }
    }
    
    return Promise.reject(enhancedError);
  }
);

export interface RegisterPayload {
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  try {
    const { data } = await api.post<RegisterResponse>('/user/register', payload);
    return data;
  } catch (error) {
    throw error;
  }
}