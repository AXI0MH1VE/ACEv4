import { WorkflowStatus } from '@ace-genesys/shared';

export function handleWorkflowStatus(status: WorkflowStatus): void {
  switch (status.state) {
    case 'idle':
      console.log('Workflow is idle');
      break;
    case 'processing':
      console.log(`Progress: ${status.progress}%`);
      break;
    case 'completed':
      console.log(`Completed in ${status.duration}ms`);
      break;
    case 'error':
      console.log(`Error (retry ${status.retryCount}):`, status.error);
      break;
  }
}
