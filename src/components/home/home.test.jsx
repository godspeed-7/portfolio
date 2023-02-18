import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './home';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Home', () => {
  it('should render Home component', async () => {
    render(<Home />);
    const element = await screen.findByText(/This is Ankit/i);
    expect(element).toBeInTheDocument();
  });

  it('should render Loading... if API fails', async () => {
    server.use(
      rest.get('http://localhost:3000/profile', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Home />);
    const errorElement = await screen.findByText(/Loading.../i);
    expect(errorElement).toBeInTheDocument;
  });
  it('should render icons', async () => {
    render(<Home />);
    // github icon
    const githubIcon = await screen.findByTestId('githubIcon');
    expect(githubIcon).toBeInTheDocument();

    // linkedin icon
    const linkedinIcon = await screen.findByTestId('linkedinIcon');
    expect(githubIcon).toBeInTheDocument();

    // view resume button
    const viewResumeBtn = await screen.findByRole('button', {
      name: /View Resume/i,
    });
    expect(viewResumeBtn).toBeInTheDocument();
  });
});
