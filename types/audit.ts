export interface AuditResult {
  tool: string;
  currentSpend: number;
  optimizedSpend: number;
  savings: number;
  recommendation: string;
}