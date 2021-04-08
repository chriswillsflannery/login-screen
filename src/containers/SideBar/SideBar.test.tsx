import React from 'react';
import { render } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar', () => {

  const renderComponent = () => render(<SideBar />);

  test('it should render the SideBar Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('SideBar');
    expect(component).toBeInTheDocument();
  });
});