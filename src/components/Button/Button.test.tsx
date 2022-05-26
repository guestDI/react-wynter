import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button correctly', () => {
  render(<Button onClick={() => {}}>
      Test Button
  </Button>);
  const btnElement = screen.getByText(/Test Button/i);
  expect(btnElement).toBeInTheDocument();
});

test('onClick triggered correctly', () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>
        Test Button
    </Button>);
    const btnElement = screen.getByText(/Test Button/i);
    fireEvent.click(btnElement)
    expect(onClick).toBeCalled();
  });
