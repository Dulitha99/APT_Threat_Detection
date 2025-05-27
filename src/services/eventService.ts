import { mockEvents } from '../mocks/events'; // Assuming mockEvents is already defined

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchEventsData = async (filters?: any) => {
  await simulateDelay(800);
  console.log('Fetching events with filters:', filters); // Log filters if any
  // In a real app: return apiClient.get('/events', { params: filters });
  return { data: mockEvents };
};
