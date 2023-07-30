import Nav from './Nav';
import Logo from './Logo';

const Header: React.FC = () => (
  <header className='header w-full flex justify-around'>
    <Logo />
    <Nav />
  </header>
);

export default Header;