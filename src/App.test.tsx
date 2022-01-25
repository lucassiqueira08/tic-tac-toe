import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jogar Button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jogar/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Jgo da Velha Image', () => {
  render(<App />);
  const linkElement = screen.getAllByAltText(/Jogo da Velha/i);
  expect(linkElement).toHaveLength(1);
});