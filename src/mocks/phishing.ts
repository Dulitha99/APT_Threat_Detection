export interface PhishingAttempt {
  id: string;
  timestamp: string;
  emailSubject?: string;
  sender?: string;
  recipient: string;
  status: 'Detected' | 'Blocked' | 'Reported' | 'UserClicked';
  type: 'Email' | 'SMS' | 'Website';
  urlOrAttachment?: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical'; // Added Critical to match one of the mock entries
}
export const mockPhishingData: PhishingAttempt[] = [
  { id: 'ph-001', timestamp: new Date().toISOString(), emailSubject: 'Urgent: Verify Your Account', sender: 'no-reply@suspicious.com', recipient: 'user@example.com', status: 'Blocked', type: 'Email', urlOrAttachment: 'http://fake-login-page.com/auth', severity: 'High' },
  { id: 'ph-002', timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), recipient: '+1234567890', status: 'Detected', type: 'SMS', urlOrAttachment: 'Your package is waiting: http://bit.ly/smish', severity: 'Medium' },
  { id: 'ph-003', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), emailSubject: 'Invoice INV-00123', sender: 'billing@client-company.com', recipient: 'finance@example.com', status: 'UserClicked', type: 'Email', urlOrAttachment: 'invoice_details.pdf.exe', severity: 'Critical' },
];
