export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: 'student' | 'instructor' | 'admin';
    };
  };
}

export interface AuthError {
  success: false;
  message: string;
  code?: string;
}
