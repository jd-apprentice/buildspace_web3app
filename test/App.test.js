import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wave button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wave at me/i);
  expect(linkElement).toBeInTheDocument();
});
