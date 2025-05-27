export interface NetworkConnection {
  id: string;
  timestamp: string;
  sourceIp: string;
  sourcePort: number;
  destinationIp: string;
  destinationPort: number;
  protocol: 'TCP' | 'UDP' | 'ICMP';
  status: 'Allowed' | 'Blocked' | 'Established' | 'Terminated';
  application?: string;
  dataTransferred?: number; // in KB
  details?: string; // Added details based on one of the mock entries
}

export const mockNetworkData: NetworkConnection[] = [
  { id: 'net-001', timestamp: new Date().toISOString(), sourceIp: '192.168.1.101', sourcePort: 54321, destinationIp: '104.16.249.193', destinationPort: 443, protocol: 'TCP', status: 'Established', application: 'HTTPS Web' , dataTransferred: 1200 },
  { id: 'net-002', timestamp: new Date(Date.now() - 1000 * 30).toISOString(), sourceIp: '192.168.1.150', sourcePort: 12345, destinationIp: '8.8.8.8', destinationPort: 53, protocol: 'UDP', status: 'Allowed', application: 'DNS Query', dataTransferred: 1 },
  { id: 'net-003', timestamp: new Date(Date.now() - 1000 * 60).toISOString(), sourceIp: '10.0.1.5', sourcePort: 0, destinationIp: '10.0.1.255', destinationPort: 0, protocol: 'ICMP', status: 'Blocked', details: 'ICMP Echo request blocked by firewall rule #3' },
];
