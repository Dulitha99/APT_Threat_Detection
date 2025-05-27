// src/mocks/index.ts

// Export all from auth.ts
export * from './auth'; 
export type { MockUser } from './auth'; // Explicitly export interface if not covered by *

// Export all from events.ts
export * from './events';
export type { MockEvent } from './events';

// Export all from malware.ts
export * from './malware';
export type { MockMalware } from './malware';

// Export all from network.ts
export * from './network';
export type { MockNetworkLog } from './network';

// Export all from phishing.ts
export * from './phishing';
export type { MockPhishingAttempt } from './phishing';

// Export all from threats.ts
export * from './threats';
export type { MockThreatIntel } from './threats';
