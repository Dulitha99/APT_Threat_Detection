// src/mocks/threats.ts

export interface MockThreatIntel {
  id: string;
  indicator: string; // The actual threat indicator (IP, domain, hash, URL)
  indicatorType: 'IP Address' | 'Domain Name' | 'File Hash (SHA256)' | 'URL' | 'CVE ID';
  source: string; // e.g., 'AlienVault OTX', 'Recorded Future', 'NIST NVD'
  severity: 'Low' | 'Medium' | 'High' | 'Critical' | 'Informational';
  description?: string;
  firstSeen?: string; // ISO date string
  lastUpdated: string; // ISO date string
  tags?: string[]; // e.g., ['phishing', 'malware-c2', 'exploit-kit']
  confidence?: number; // 0-100
}

export const mockThreatIntelData: MockThreatIntel[] = [
  { 
    id: 'ti-001', 
    indicator: 'evil-domain.com', 
    indicatorType: 'Domain Name', 
    source: 'SecureWorks CTU', 
    severity: 'High', 
    description: 'Associated with "OfficeDrama" phishing campaign targeting financial sector.', 
    firstSeen: '2023-10-01T00:00:00Z',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
    tags: ['phishing', 'financial-target'],
    confidence: 90,
  },
  { 
    id: 'ti-002', 
    indicator: 'CVE-2024-12345', 
    indicatorType: 'CVE ID', 
    source: 'NIST NVD', 
    severity: 'Critical', 
    description: 'Critical Remote Code Execution vulnerability in Apache Struts. Patch immediately.', 
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    tags: ['vulnerability', 'rce', 'apache-struts'],
    confidence: 100,
  },
  { 
    id: 'ti-003', 
    indicator: '203.0.113.75', 
    indicatorType: 'IP Address', 
    source: 'AlienVault OTX', 
    severity: 'Medium', 
    description: 'This IP has been reported as a command and control server for Cobalt Strike.', 
    firstSeen: '2023-08-15T00:00:00Z',
    lastUpdated: new Date().toISOString(),
    tags: ['c2', 'cobalt-strike'],
    confidence: 75,
  },
  {
    id: 'ti-004',
    indicator: 'badhash123abc...',
    indicatorType: 'File Hash (SHA256)',
    source: 'VirusTotal',
    severity: 'High',
    description: 'SHA256 hash of a known malware dropper.',
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    tags: ['malware', 'dropper'],
    confidence: 95,
  }
];

// Optional: Function to simulate fetching threat intel data
export const getMockThreatIntel = (): Promise<MockThreatIntel[]> => 
  new Promise(resolve => setTimeout(() => resolve(mockThreatIntelData), 700));

// Keeping the existing generateNewThreat function for now, though it might need updates
// to align with the new MockThreatIntel interface if used elsewhere.
export const generateNewThreat = (): MockThreatIntel => {
  const sources = ['AlienVault OTX', 'Recorded Future', 'SecureWorks CTU', 'Mandiant', 'NIST NVD', 'VirusTotal'];
  const types: MockThreatIntel['indicatorType'][] = ['IP Address', 'Domain Name', 'File Hash (SHA256)', 'URL', 'CVE ID'];
  const severities: MockThreatIntel['severity'][] = ['Medium', 'High', 'Critical', 'Informational'];
  const newId = `ti-${String(Date.now()).slice(-5)}`;
  const randomType = types[Math.floor(Math.random() * types.length)];
  let randomIndicator = '';
  switch(randomType) {
    case 'IP Address': randomIndicator = `198.51.100.${Math.floor(Math.random() * 255)}`; break;
    case 'Domain Name': randomIndicator = `threat-${newId.toLowerCase()}.xyz`; break;
    case 'File Hash (SHA256)': randomIndicator = Array(64).fill(0).map(() => Math.floor(Math.random()*16).toString(16)).join(''); break;
    case 'URL': randomIndicator = `http://threat-${newId.toLowerCase()}.xyz/payload.zip`; break;
    case 'CVE ID': randomIndicator = `CVE-2024-${String(Math.floor(Math.random() * 9000) + 1000)}`; break;
  }

  return {
    id: newId,
    indicator: randomIndicator,
    indicatorType: randomType,
    severity: severities[Math.floor(Math.random() * severities.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    description: `Newly detected activity related to ${randomIndicator}. Further analysis pending.`,
    lastUpdated: new Date().toISOString(),
    firstSeen: new Date(Date.now() - 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 30)).toISOString(), // within last 30 days
    tags: [['emerging-threat', randomType.toLowerCase().split(' ')[0]].filter(Boolean) as string[]],
    confidence: Math.floor(Math.random() * 60) + 40, // 40-99
  };
};
