import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './home';

describe('Home', () => {
  it('should render Home component', async () => {
    render(<Home />);
    const element = await screen.findByText(/This is Ankit/i);
    expect(element).toBeInTheDocument();
  });
});
