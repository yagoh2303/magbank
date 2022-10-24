import { render, screen } from '@testing-library/react';
import App from './App';

test("renders magbank header", () => {
  const { getByTest } = render(<App />);
  const el = getByText(/MagBank/i);
  expect(el).toBeInTheDocument();
});
