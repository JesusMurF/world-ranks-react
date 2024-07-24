import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Hero } from './Hero';


test('renders Hero', () => {
  render(<Hero />);
  const img = screen.getByAltText('World Ranks');
  expect(img).toBeInTheDocument();
});
