import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {

  const renderComponent = () => render(<Logo />);

  test('it should render the Logo Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Logo');
    expect(component).toBeInTheDocument();
  });
});