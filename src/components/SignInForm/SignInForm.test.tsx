import { render, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';
import { ISignInFormProps } from './SignInForm.types';

describe('SignInForm', () => {
  let props: ISignInFormProps;
  let setShowResetForm = jest.fn();

  beforeEach(() => {
    props = {
      setShowResetForm,
    };
  });

  const renderComponent = () => render(<SignInForm {...props} />);

  test('it should render the SignInForm Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('SignInForm');
    expect(component).toBeInTheDocument();
  });

  test('clicking link to reset shows reset form', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('SignInForm--link');
    fireEvent.click(component);
    expect(setShowResetForm).toHaveBeenCalled();
  });
});