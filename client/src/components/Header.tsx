import Nav from './Nav';
import Logo from './Logo';

const Header: React.FC = () => (
  <header className='header w-full justify-between'>
    <Logo />
    <Nav />
  </header>
);

export default Header;