import { render } from '@testing-library/react';

describe('Quote', () => {
  test('should render quotes', () => {
    const { container } = render(<quotes />);
    expect(container).toMatchSnapshot();
  });
});
