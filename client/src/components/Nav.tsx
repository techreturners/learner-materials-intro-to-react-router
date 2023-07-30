import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => (
  <>
    <ul className='primary-nav'>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        {' '}
        <NavLink to={'/misdemeanours'}>Misdemeanours</NavLink>
      </li>
      <li>
        {' '}
        <NavLink to={'/confess'}>Confess to us</NavLink>
      </li>
    </ul>
  </>
);

export default Nav;
