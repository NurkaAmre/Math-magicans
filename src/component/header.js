import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="top-section">
    <h2>Math Magicians</h2>
    <nav className="navigation">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink className="link" to="/calculator">Calculator</NavLink>
      <NavLink className="link" to="/quotes">Quotes</NavLink>
    </nav>
  </header>
);

export default Header;
