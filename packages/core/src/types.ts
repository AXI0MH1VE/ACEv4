export interface HypothesisInput {
  input: number;
  context?: string;
}

export interface HypothesisResult {
  result: number;
  confidence: number;
}

export interface ModuleConfig {
  version: string;
  timeout: number;
}

export interface ProcessResult {
  output: unknown;
}

export interface CognitiveModule {
  readonly id: string;
  readonly version: string;
  initialize(config: ModuleConfig): Promise<void>;
  process(input: unknown): Promise<ProcessResult>;
  shutdown(): Promise<void>;
}
