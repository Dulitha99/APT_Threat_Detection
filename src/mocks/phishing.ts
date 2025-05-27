// src/mocks/phishing.ts

export interface MockPhishingAttempt {
  id: string;
  receivedDate: string; // ISO date string
  sender: string;
  subject?: string; // Subject might not be present for SMS phishing
  targetEmail?: string; // Or targetPhoneNumber for SMS
  targetUser?: string; // Username or ID of the targeted internal user
  type: 'Email' | 'SMS' | 'Website' | 'Social Media';
  status: 'Detected' | 'Blocked' | 'ReportedByUser' | 'UserClickedLink' | 'CredentialsEntered';
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  phishingUrl?: string; // The malicious URL
  attachmentName?: string; // If it was an attachment-based attack
  details?: string;
}

export const mockPhishingAttemptsData: MockPhishingAttempt[] = [
  { 
    id: 'ph-001', 
    receivedDate: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    sender: 'no-reply@suspicious-bank.com', 
    subject: 'Urgent: Verify Your Account Immediately!', 
    targetEmail: 'employee1@securexdr.com',
    targetUser: 'jdoe',
    type: 'Email', 
    status: 'Blocked', 
    riskLevel: 'High',
    phishingUrl: 'http://fake-login-page.com/auth/session-expired',
    details: 'Blocked by email gateway due to known malicious domain.',
  },
  { 
    id: 'ph-002', 
    receivedDate: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    sender: '+12345000000', // SMS sender
    targetEmail: '+15551234567', // SMS recipient can be put here or a dedicated field
    type: 'SMS', 
    status: 'ReportedByUser', 
    riskLevel: 'Medium',
    phishingUrl: 'http://bit.ly/your-package-delivery-update',
    details: 'User reported suspicious SMS message about package delivery.',
  },
  { 
    id: 'ph-003', 
    receivedDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
    sender: 'support@microsift.com', // Misspelled sender
    subject: 'Action Required: Unusual Sign-in Activity', 
    targetEmail: 'ceo_office@securexdr.com',
    targetUser: 'smanager',
    type: 'Email', 
    status: 'UserClickedLink', 
    riskLevel: 'Critical',
    phishingUrl: 'http://microsift-security-alerts.com/login',
    details: 'User reported clicking the link but did not enter credentials. URL analysis pending.',
  },
];

// Optional: Function to simulate fetching phishing attempt data
export const getMockPhishingAttempts = (): Promise<MockPhishingAttempt[]> => 
  new Promise(resolve => setTimeout(() => resolve(mockPhishingAttemptsData), 350));
