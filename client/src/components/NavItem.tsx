import { NavLink } from 'react-router-dom';

interface INavItem {
  to: string;
  text: string;
}

const NavItem: React.FC<INavItem> = ({ to, text }) => (
  <li className='p-1 m-1 capitalize'>
    <NavLink to={to} className={'p-2'}>
      {text}
    </NavLink>
  </li>
);

export default NavItem;
