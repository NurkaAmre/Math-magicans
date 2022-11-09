import { render } from '@testing-library/react';
import Home from '../../component/Home';

describe('Home', () => {
  test('should render homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});