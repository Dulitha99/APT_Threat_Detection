export interface ThreatIntel {
  id: string;
  title: string;
  type: 'IoC' | 'Vulnerability' | 'Actor' | 'Campaign';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  source: string; // e.g., 'AlienVault OTX', 'Recorded Future'
  indicators?: string[]; // IPs, domains, hashes
  description: string;
  publishedDate: string;
}
export const mockThreatData: ThreatIntel[] = [
  { id: 'ti-001', title: 'New Phishing Campaign "OfficeDrama" Targets Financial Sector', type: 'Campaign', severity: 'High', source: 'SecureWorks CTU', indicators: ['evil-domain.com', '123.45.67.89'], description: 'Actors using fake Office 365 login pages to harvest credentials.', publishedDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() },
  { id: 'ti-002', title: 'CVE-2024-XXXX: Critical RCE in Apache Struts', type: 'Vulnerability', severity: 'Critical', source: 'NIST NVD', description: 'A remote code execution vulnerability exists in Apache Struts versions X.Y.Z. Patch immediately.', publishedDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  { id: 'ti-003', title: 'Malicious IP 203.0.113.75 associated with Cobalt Strike C2', type: 'IoC', severity: 'Medium', source: 'AlienVault OTX', indicators: ['203.0.113.75'], description: 'This IP has been reported as a command and control server for Cobalt Strike.', publishedDate: new Date().toISOString() },
];

// For real-time simulation in ThreatIntelligence dashboard
export const generateNewThreat = (): ThreatIntel => {
  const sources = ['AlienVault OTX', 'Recorded Future', 'SecureWorks CTU', 'Mandiant'];
  const types: ThreatIntel['type'][] = ['IoC', 'Vulnerability', 'Campaign'];
  const severities: ThreatIntel['severity'][] = ['Medium', 'High', 'Critical'];
  const newId = `ti-${String(Date.now()).slice(-4)}`;
  return {
    id: newId,
    title: `Emerging Threat ${newId}`,
    type: types[Math.floor(Math.random() * types.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    description: `Newly detected activity related to ${newId}. Further analysis pending.`,
    publishedDate: new Date().toISOString(),
    indicators: [`198.51.100.${Math.floor(Math.random() * 255)}`, `bad-actor-site-${newId}.net`]
  };
};
