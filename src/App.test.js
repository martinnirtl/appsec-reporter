import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);

  const generateReportButton = screen.getByText('Generate CSV Report');
  expect(generateReportButton).toBeInTheDocument();
});
