// Export types
export type {
  HypothesisInput,
  HypothesisResult,
  ModuleConfig,
  ProcessResult,
  CognitiveModule
} from './types';

// Export engine
export { CognitiveEngine } from './engine';

// Export hypothesis utilities
export { processHypothesis } from './hypothesis/generator';
export { validateHypothesis } from './hypothesis/validator';
