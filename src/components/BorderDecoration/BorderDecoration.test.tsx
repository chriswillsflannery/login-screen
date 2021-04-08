import React from 'react';
import { render } from '@testing-library/react';
import BorderDecoration from './BorderDecoration';
import { IBorderDecorationProps } from './BorderDecoration.types';

describe('BorderDecoration', () => {
  let props: IBorderDecorationProps;

  beforeEach(() => {
    props = {
      className: 'fakename',
      position: 'tr',
      size: 'sm',
    }
  });

  const renderComponent = () => render(<BorderDecoration {...props} />);

  test('it should render the BorderDecoration Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('BorderDecoration');
    expect(component).toBeInTheDocument();
  });
});