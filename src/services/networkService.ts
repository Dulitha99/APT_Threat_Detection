import apiClient from './apiClient';
import { mockNetworkData, NetworkConnection } from '../mocks/network';

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNetworkData = async (filters?: any): Promise<{ data: NetworkConnection[] }> => {
  await simulateDelay(1200);
  console.log('Fetching network data with filters:', filters);
  // In a real app: return apiClient.get('/network', { params: filters });
  return { data: mockNetworkData };
};
