import { render } from '@testing-library/react';
import MainContent from './MainContent';

describe('MainContent', () => {

  const renderComponent = () => render(<MainContent />);

  test('it should render the MainContent Page', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('MainContent');
    expect(component).toBeInTheDocument();
  });
});