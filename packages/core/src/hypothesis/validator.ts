import { HypothesisResult } from '../types';

export function validateHypothesis(result: HypothesisResult): boolean {
  return result.confidence > 0.5 && result.result >= 0;
}
