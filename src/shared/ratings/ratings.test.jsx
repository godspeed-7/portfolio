import { render, screen } from '@testing-library/react';
import React from 'react';
import Ratings from './ratings';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Ratings', () => {
  it('should render Ratings component', async () => {
    const ratings = [
      {
        id: 1,
        name: 'HTML',
        rating: 8,
      },
      {
        id: 2,
        name: 'CSS',
        rating: 7,
      },
      {
        id: 3,
        name: 'Javascript',
        rating: 9,
      },
    ];
    render(<Ratings ratings={ratings} />);
    const ratingsElem = await screen.findByTestId('ratings');
    expect(ratingsElem.children).toHaveLength(3);
  });
});
