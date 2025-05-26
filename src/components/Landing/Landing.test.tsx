import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from './Landing';

// Mock useScrollAnimation hook as it's not the focus of this test
// and IntersectionObserver is globally mocked in setupTests.ts
jest.mock('../../hooks/useScrollAnimation', () => () => ({
  // Return a dummy ref object
  current: null, 
}));


describe('Landing Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
  });

  test('renders hero section title and description', () => {
    expect(screen.getByText('Advanced Threat Detection & Response')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Open-source XDR solution powered by Machine Learning for phishing, malware, network, and Windows event log analysis'
      )
    ).toBeInTheDocument();
  });

  test('renders "Get Started" and "GitHub" buttons', () => {
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  test('renders "Key Features" section header', () => {
    expect(screen.getByRole('heading', { name: /key features/i })).toBeInTheDocument();
  });

  test('renders feature cards (check for a few titles)', () => {
    expect(screen.getByRole('heading', { name: /phishing analysis/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /malware analysis/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /network analysis/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /windows event log analysis/i })).toBeInTheDocument();
  });

  test('renders "Solutions" section header', () => {
    expect(screen.getByRole('heading', { name: /solutions/i })).toBeInTheDocument();
  });

  test('renders solution tabs (check for a few titles)', () => {
    expect(screen.getByRole('heading', { name: /enterprise/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /mid-market/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /smb/i })).toBeInTheDocument();
  });
  
  test('renders "Contact Us" section header', () => {
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });

  test('renders Footer', () => {
    // Assuming Footer contains some identifiable text, e.g., copyright
    // This is an indirect test. A dedicated Footer.test.tsx would be better for Footer specifics.
    expect(screen.getByText(/securexdr/i, { selector: 'footer *' })).toBeInTheDocument(); 
  });
});
