export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    database: boolean;
    redis: boolean;
  };
}

