import apiClient from './apiClient';
import { mockThreatData, ThreatIntel, generateNewThreat } from '../mocks/threats';

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let currentThreats: ThreatIntel[] = [...mockThreatData];

export const fetchThreatData = async (filters?: any): Promise<{ data: ThreatIntel[] }> => {
  await simulateDelay(900);
  console.log('Fetching threat data with filters:', filters);
  // In a real app: return apiClient.get('/threats', { params: filters });
  return { data: currentThreats };
};

// For real-time simulation:
// This is a simplified example. React Query's refetching or a WebSocket would be better.
// This function could be called by a component effect with setInterval.
// For now, it just adds to the in-memory array.
// A more robust approach would involve updating React Query cache.
export const simulateNewThreatArrival = (): ThreatIntel => {
  const newThreat = generateNewThreat();
  currentThreats = [newThreat, ...currentThreats];
  // To limit memory usage, you might want to cap the array size
  if (currentThreats.length > 50) {
    currentThreats.pop();
  }
  console.log('New threat arrived:', newThreat.title);
  return newThreat;
};
