import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

// Mock useScrollAnimation hook
jest.mock('../../hooks/useScrollAnimation', () => () => ({
  current: null,
}));

// Mock Footer as it's not the focus of this test
jest.mock('../Common/Footer', () => () => <footer data-testid="footer-mock">Footer</footer>);


describe('About Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });

  test('renders hero section title', () => {
    expect(screen.getByRole('heading', { name: /about securexdr/i })).toBeInTheDocument();
  });

  test('renders "Our Origin & Vision" section', () => {
    expect(screen.getByRole('heading', { name: /our origin & vision/i })).toBeInTheDocument();
    expect(screen.getByText(/SecureXDR was born from a shared vision/i)).toBeInTheDocument();
  });

  test('renders "Our Mission" section', () => {
    expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument();
    expect(screen.getByText(/SecureXDR is an open-source solution designed to democratize/i)).toBeInTheDocument();
  });

  test('renders "Our Core Values" section and value titles', () => {
    expect(screen.getByRole('heading', { name: /our core values/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /innovation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /collaboration/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /accessibility/i })).toBeInTheDocument();
  });

  test('renders "Our Team" section', () => {
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument();
    expect(screen.getByText(/SecureXDR is driven by a dedicated team/i)).toBeInTheDocument();
  });
  
  test('renders team member names', () => {
    expect(screen.getByText('Dulitha Wickramasinghe')).toBeInTheDocument();
    expect(screen.getByText('Nilushi Chandrasekara')).toBeInTheDocument();
    expect(screen.getByText('Lelasara Gangaboda')).toBeInTheDocument();
    expect(screen.getByText('Induwara Sellahewa')).toBeInTheDocument();
  });

  test('renders CTA section', () => {
    expect(screen.getByRole('heading', { name: /ready to get started/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /visit github/i })).toBeInTheDocument();
  });

  test('renders mocked Footer', () => {
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
  });
});
