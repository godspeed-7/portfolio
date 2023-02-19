import { render, screen } from '@testing-library/react';
import React from 'react';
import Toolbar from './toolbar';

describe('Toolbar', () => {
  it('should render Toolbar component', async () => {
    render(<Toolbar />);
    const elem = await screen.findByTestId('options');
    expect(elem.children).toHaveLength(3);
  });
  it('should render home menu', async () => {
    render(<Toolbar />);
    const elem = await screen.findByTestId('options');
    expect(elem.children[0]).toHaveTextContent(/Home/i);
  });
});
