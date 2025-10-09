export class Server {
  start(port: number): void {
    console.log('Starting telemetry dashboard server on port', port);
  }
}

export class MetricsCollector {
  collect(): void {
    console.log('Collecting metrics');
  }
}
