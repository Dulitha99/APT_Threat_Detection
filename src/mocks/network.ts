// src/mocks/network.ts

export interface MockNetworkLog {
  id: string;
  timestamp: string; // ISO date string
  sourceIp: string;
  sourcePort: number;
  destinationIp: string;
  destinationPort: number;
  protocol: 'TCP' | 'UDP' | 'ICMP' | 'HTTP' | 'HTTPS' | 'DNS';
  action: 'Allowed' | 'Blocked' | 'Permitted' | 'Denied'; // More common terms for firewalls/network logs
  application?: string; // Name of the application generating traffic
  bytesSent?: number;
  bytesReceived?: number;
  threatType?: 'Intrusion Attempt' | 'Policy Violation' | 'Scanning Activity'; // Optional
  details?: string;
}

export const mockNetworkLogsData: MockNetworkLog[] = [
  { 
    id: 'net-001', 
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 mins ago
    sourceIp: '192.168.1.101', 
    sourcePort: 54321, 
    destinationIp: '104.16.249.193', // Example public IP
    destinationPort: 443, 
    protocol: 'HTTPS', 
    action: 'Allowed', 
    application: 'SecureXDR Web Client', 
    bytesSent: 1200,
    bytesReceived: 8500,
    details: 'User adminuser accessing dashboard.',
  },
  { 
    id: 'net-002', 
    timestamp: new Date(Date.now() - 1000 * 30).toISOString(), // 30 seconds ago
    sourceIp: '192.168.1.150', 
    sourcePort: 12345, 
    destinationIp: '8.8.8.8', 
    destinationPort: 53, 
    protocol: 'DNS', 
    action: 'Allowed', 
    application: 'System Resolver',
    bytesSent: 70,
    bytesReceived: 250,
    details: 'DNS query for example.com.',
  },
  { 
    id: 'net-003', 
    timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), // 2 mins ago
    sourceIp: '10.0.1.5', 
    sourcePort: 0, // ICMP doesn't use ports in the same way
    destinationIp: '10.0.1.255', // Broadcast or specific internal IP
    destinationPort: 0,
    protocol: 'ICMP', 
    action: 'Blocked', 
    threatType: 'Scanning Activity',
    details: 'ICMP Echo request (ping) blocked by firewall rule #3 - possible network scan.',
  },
];

// Optional: Function to simulate fetching network log data
export const getMockNetworkLogs = (): Promise<MockNetworkLog[]> => 
  new Promise(resolve => setTimeout(() => resolve(mockNetworkLogsData), 550));
