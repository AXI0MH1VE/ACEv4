export class ACEError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = 'ACEError';
  }
}

export class ValidationError extends ACEError {
  constructor(message: string, public readonly field?: string) {
    super(message, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

export class ConfigurationError extends ACEError {
  constructor(message: string, public readonly configKey?: string) {
    super(message, 'CONFIGURATION_ERROR');
    this.name = 'ConfigurationError';
  }
}
