import React from 'react';
import { render } from '@testing-library/react';
import Toast from './Toast';
import { IToastProps } from './Toast.types';

describe('Toast', () => {
  let props: IToastProps;

  const renderComponent = () => render(<Toast {...props} />);

  test('it should render the Toast Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Toast');
    expect(component).toBeInTheDocument();
  });
});