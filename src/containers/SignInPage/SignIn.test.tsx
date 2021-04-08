import { render } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn', () => {

  const renderComponent = () => render(<SignIn />);

  test('it should render the SignIn Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('SignIn');
    expect(component).toBeInTheDocument();
  });
});