import { TelemetryEvent } from '@ace-genesys/shared';

export class TelemetryCollector {
  collectMetric(event: TelemetryEvent): void {
    console.log('Collecting metric:', event.type);
  }

  collectLog(message: string): void {
    console.log('Collecting log:', message);
  }
}
