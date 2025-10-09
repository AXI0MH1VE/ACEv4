import { CognitiveModule, ModuleConfig, ProcessResult } from './types';
import { processHypothesis } from './hypothesis/generator';
import { validateHypothesis } from './hypothesis/validator';

export class CognitiveEngine implements CognitiveModule {
  readonly id = 'ace-cognitive-core';
  readonly version = '4.0.0';

  private initialized = false;

  async initialize(config: ModuleConfig): Promise<void> {
    if (this.initialized) return;
    // Initialize engine with config
    if (config.version !== '4.0.0') {
      throw new Error('Incompatible version');
    }
    this.initialized = true;
  }

  async process(input: unknown): Promise<ProcessResult> {
    if (!this.initialized) {
      throw new Error('Engine not initialized');
    }

    if (typeof input !== 'object' || input === null) {
      throw new Error('Invalid input');
    }

    const hypothesis = processHypothesis(input as any); // Assume input is HypothesisInput
    const isValid = validateHypothesis(hypothesis);

    return {
      output: {
        hypothesis,
        valid: isValid
      }
    };
  }

  async shutdown(): Promise<void> {
    if (!this.initialized) return;
    this.initialized = false;
  }
}
