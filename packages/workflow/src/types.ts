export interface WorkflowDefinition {
  id: string;
  steps: string[];
}

export interface WorkflowResult {
  success: boolean;
  result?: unknown;
}
