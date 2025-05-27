// Mock event data
export const mockEvents = [
  { id: 'evt-001', timestamp: new Date().toISOString(), type: 'Login Attempt', severity: 'Low', sourceIp: '192.168.1.100', status: 'Failed', details: 'Incorrect password for user admin' },
  { id: 'evt-002', timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), type: 'Firewall Block', severity: 'Medium', sourceIp: '10.0.5.12', destinationIp: '203.0.113.45', details: 'Blocked outbound connection to suspicious IP' },
  { id: 'evt-003', timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(), type: 'Malware Detected', severity: 'High', device: 'Workstation-05', threatName: 'Trojan.GenericKDZ.345', details: 'File quarantined: C:/Downloads/archive.zip' },
];
