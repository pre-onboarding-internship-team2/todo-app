interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  error: string;
}

export type { AuthRequest, AuthResponse };
