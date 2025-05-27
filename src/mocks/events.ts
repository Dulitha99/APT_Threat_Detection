// src/mocks/events.ts

export interface MockEvent {
  id: string;
  timestamp: string; // ISO date string
  type: 'Login Attempt' | 'Firewall Block' | 'Malware Detected' | 'System Update' | 'Policy Violation';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  sourceIp?: string;
  destinationIp?: string;
  user?: string; // Username or ID
  device?: string; // Device name or ID
  description: string;
  status?: 'Success' | 'Failed' | 'Pending' | 'Resolved'; // Optional status
}

export const mockEventsData: MockEvent[] = [
  { 
    id: 'evt-001', 
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    type: 'Login Attempt', 
    severity: 'Low', 
    sourceIp: '192.168.1.100', 
    user: 'adminuser',
    description: 'Failed login attempt for user adminuser.',
    status: 'Failed',
  },
  { 
    id: 'evt-002', 
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    type: 'Firewall Block', 
    severity: 'Medium', 
    sourceIp: '10.0.5.12', 
    destinationIp: '203.0.113.45', 
    description: 'Blocked outbound connection to suspicious IP 203.0.113.45 on port 443.',
  },
  { 
    id: 'evt-003', 
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    type: 'Malware Detected', 
    severity: 'High', 
    device: 'Workstation-05', 
    description: 'Malware "Trojan.GenericKDZ.345" detected and quarantined. File: C:/Downloads/archive.zip',
    status: 'Resolved',
  },
  {
    id: 'evt-004',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    type: 'System Update',
    severity: 'Low',
    device: 'Server-01',
    description: 'System update applied successfully.',
    status: 'Success',
  },
];

// Optional: Function to simulate fetching event data
export const getMockEvents = (): Promise<MockEvent[]> => 
  new Promise(resolve => setTimeout(() => resolve(mockEventsData), 400));
