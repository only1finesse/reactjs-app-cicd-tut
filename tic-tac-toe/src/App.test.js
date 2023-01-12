import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page with scores reset', () => {
  render(<App />);
  expect(0).toBeInTheDocument();
});
