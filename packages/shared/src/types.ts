export interface Result<T> {
  success: boolean;
  data: T;
  timestamp: number;
  error?: Error;
}

export function wrapInResult<T>(data: T): Result<T> {
  return {
    success: true,
    data,
    timestamp: Date.now()
  };
}

export type WorkflowState =
  | 'idle'
  | 'processing'
  | 'awaiting_validation'
  | 'completed'
  | 'error';

export type WorkflowStatus =
  | { state: 'idle' }
  | { state: 'processing'; progress: number; startTime: number }
  | { state: 'completed'; result: unknown; duration: number }
  | { state: 'error'; error: Error; retryCount: number };

export type TelemetryEvent =
  | { type: 'metric'; name: string; value: number; timestamp: number }
  | { type: 'log'; level: 'info' | 'warn' | 'error'; message: string }
  | { type: 'trace'; spanId: string; duration: number };
