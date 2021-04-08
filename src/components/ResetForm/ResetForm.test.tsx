import { render, fireEvent } from '@testing-library/react';
import ResetForm from './ResetForm';
import { IResetFormProps } from './ResetForm.types';

describe('ResetForm', () => {
  let props: IResetFormProps;
  let setShowResetForm = jest.fn();
  let setShowToast = jest.fn();

  beforeEach(() => {
    props = {
      setShowResetForm,
      setShowToast,
    };
  });

  const renderComponent = () => render(<ResetForm {...props} />);

  describe('renders component', () => {
    test('it should render the ResetForm Page', () => {
      const { getByTestId } = renderComponent();
      const component = getByTestId('ResetForm');
      expect(component).toBeInTheDocument();
    });
  });
});