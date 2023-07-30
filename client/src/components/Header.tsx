import Nav from './Nav';
import Logo from './Logo';
import './Header.css';

const Header: React.FC = () => (
  <header className='header'>
    <Logo />
    <Nav />
  </header>
);

export default Header;
