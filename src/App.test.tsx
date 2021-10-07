import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentWithUseStateStyled from './components/componentWithUseEffect';

test('renders learn react link', () => {
  render(<ComponentWithUseStateStyled />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
