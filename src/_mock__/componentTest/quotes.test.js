import { render } from '@testing-library/react';
import NavBar from '../../component/Quotes';

describe('Quote', () => {
    test('should render quotes', () => {
      const { container } = render(<quotes />);
      expect(container).toMatchSnapshot();
    });
  });