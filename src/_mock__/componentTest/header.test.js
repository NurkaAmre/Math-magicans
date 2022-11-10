import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../component/header';

describe('Header', () => {
  test('should render header', () => {
    const { container } = render(<Router><NavBar /></Router>);
    expect(container).toMatchSnapshot();
  });
});
