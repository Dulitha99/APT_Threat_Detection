import apiClient from './apiClient';
import { mockPhishingData, PhishingAttempt } from '../mocks/phishing';

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPhishingData = async (filters?: any): Promise<{ data: PhishingAttempt[] }> => {
  await simulateDelay(700);
  console.log('Fetching phishing data with filters:', filters);
  // In a real app: return apiClient.get('/phishing', { params: filters });
  return { data: mockPhishingData };
};
